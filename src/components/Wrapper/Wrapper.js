//method/component for getting accessing the children property and inputing it into the html

import React from "react";

const Wrapper = props => <div className="wrapper">{props.children}</div>;

export default Wrapper;