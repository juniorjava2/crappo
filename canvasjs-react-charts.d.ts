declare module '@canvasjs/react-charts' {
    import { Component } from 'react';
  
    export interface CanvasJSChartProps {
      options: any;
      [key: string]: any;
    }
  
    export class CanvasJSChart extends Component<CanvasJSChartProps> {}
  
    const CanvasJSReact: {
      CanvasJS: any;
      CanvasJSChart: typeof CanvasJSChart;
    };
  
    export default CanvasJSReact;
  }