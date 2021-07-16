import * as React from 'react';
import { Line } from 'react-chartjs-2';

export interface IGraphProps {}

export interface IGraphState {}
const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};
const options = {
  animation: {
    duration: 0, // general animation time
  },
  hover: {
    animationDuration: 0, // duration of animations when hovering an item
  },
  responsiveAnimationDuration: 0, // animation duration after a resize
};

export default class Graph extends React.Component<IGraphProps, IGraphState> {
  constructor(props: IGraphProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div className="flex flex-row flex-wrap justify-around ">
        <div className="w-1/2">
          <Line data={data} redraw={false} options={options} />
        </div>
        <div className="w-1/2">
          <Line data={data} redraw={false} options={options} />
        </div>
        <div className="w-1/2">
          <Line data={data} redraw={false} options={options} />
        </div>
      </div>
    );
  }
}
