import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}


const params: Param[] = [
  { id: 1, name: 'Назначение', type: 'string' },
  { id: 2, name: 'Длина', type: 'string' },
  { id: 3, name: 'Цена', type: 'number' },
  {
    id: 4,
    name: 'Цвет',
    type: 'select',
    options: ['Красный', 'Зеленый', 'Синий'],
  },
];

const model: Model = {
  paramValues: [
    { paramId: 1, value: 'повседневное' },
    { paramId: 2, value: 'макси' },
    { paramId: 3, value: 100 }, 
  ],
  
};

interface Param {
  id: number;
  name: string;
  type: 'string' | 'number' | 'select'; 
  options?: string[]; 
}

interface ParamValue {
  paramId: number;
  value: string | number;
}

interface Model {
  paramValues: ParamValue[];
}

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  paramValues: ParamValue[];
}


const findParamValue = (paramValues: ParamValue[], paramId: number) => {
  return paramValues.find(pv => pv.paramId === paramId)?.value;
};


const ParamInput = ({
  param,
  value,
  onChange,
}: {
  param: Param;
  value: string | number | undefined;
  onChange: (paramId: number, newValue: string | number) => void;
}) => {
  switch (param.type) {
    case 'string':
      return (
        <div>
          <label htmlFor={`param-${param.id}`}>{param.name}:</label>
          <input
            type="text"
            id={`param-${param.id}`}
            value={value !== undefined ? value : ''}
            onChange={e => onChange(param.id, e.target.value)}
          />
        </div>
      );
  
    default:
      return <div>Unsupported parameter type</div>;
  }
};


class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      paramValues: [...props.model.paramValues], 
    };
  }

 
  handleParamChange = (paramId: number, newValue: string | number) => {
    this.setState(prevState => {
      const updatedParamValues = prevState.paramValues.map(pv =>
        pv.paramId === paramId ? { ...pv, value: newValue } : pv
      );
      const isNewParam = !updatedParamValues.some(pv => pv.paramId === paramId);

      if (isNewParam) {
        updatedParamValues.push({ paramId, value: newValue });
      }
      return { paramValues: updatedParamValues };
    });
  };

  
  getModel = (): Model => {
    return {
      paramValues: this.state.paramValues,
    
    };
  };

  render() {
    const { params } = this.props;
    const { paramValues } = this.state;

    return (
      <div>
        {params.map(param => {
          const value = findParamValue(paramValues, param.id);

          return (
            <ParamInput
              key={param.id}
              param={param}
              value={value}
              onChange={this.handleParamChange}
            />
          );
        })}
        <button onClick={() => console.log(this.getModel())}>
          Get Model
        </button>
      </div>
    );
  }
}


class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <ParamEditor params={params} model={model} />
        <p></p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));