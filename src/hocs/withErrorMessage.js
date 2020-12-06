import React from "react";
import PropTypes from "prop-types";

const withErrorMessage = (WrappedComponent) => {
    const withErrorMessageComponent = ({errorMessage, errorClass, ...props}) => {
        if(errorMessage) {
            return (
            <div className={errorClass}>{errorMessage}</div>
            );
        }

        return <WrappedComponent {...props} />
    }

    withErrorMessageComponent.propTypes = {
        errorMessage: PropTypes.string,
        errorClass: PropTypes.string
    };
    withErrorMessageComponent.defaultProps = {
        errorMessage: ''
    };

    return withErrorMessageComponent;
}

export default withErrorMessage;