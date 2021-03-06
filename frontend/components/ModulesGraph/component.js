import React from "react";
import { renderGraph } from "./visGraph";

function createMarkup() {
  return {
    __html: '<div id="graph-container" style="height:100%;flex-grow: 1"></div>'
  };
}

export default class ModulesGraphComponent extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.network = null;
  }

  renderGraph = () => {
    const container = this.container.current;
    const rect = container.getBoundingClientRect();
    this.network = renderGraph(this.props, {
      width: rect.width,
      height: rect.height
    });
  };

  componentDidMount() {
    this.renderGraph();
  }

  componentDidUpdate() {
    this.renderGraph();
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.moduleId !== this.props.moduleId;
  }

  render() {
    return (
      <div
        ref={this.container}
        style={{ flexGrow: 1 }}
        dangerouslySetInnerHTML={createMarkup()}
      />
    );
  }
}
