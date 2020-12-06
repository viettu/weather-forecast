import React from "react";
import PropTypes from "prop-types";

const withErrorMessage = (WrappedComponent) => {
    const withErrorMessageComponent = ({errorMessage, ...props}) => {
        if(errorMessage) {
            return (
            <div className="Weather-error">{errorMessage}</div>
            );
        }

        return <WrappedComponent {...props} />
    }

    withErrorMessageComponent.propTypes = {
        errorMessage: PropTypes.string
    };
    withErrorMessageComponent.defaultProps = {
        errorMessage: '',
    };

    return withErrorMessageComponent;
}

export default withErrorMessage;