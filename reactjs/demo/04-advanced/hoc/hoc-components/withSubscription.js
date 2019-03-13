import React from 'react'
import DataSource from '../ds/DataSource';
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
function withSubscription(WrappedComponent, selectData) {

    class WithSubscription  extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props)
            };
        }

        componentDidMount() {
            DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }

        handleChange() {
            this.setState({
                data: selectData(DataSource, this.props)
            });
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    }
    WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
    return WithSubscription;
}
export default withSubscription;