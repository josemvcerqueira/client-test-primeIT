import React, { FC } from 'react';

import { Overlay, Container } from './withLoading.styles';

interface Props {
    isFetching: boolean;
    otherProps: any;
}

interface OtherProps {
    otherProps: { [key: string]: any };
}

const withLoading = (WrappedComponent: FC<OtherProps>) => (
    props: Props,
): JSX.Element | FC => {
    const { isFetching, ...otherProps } = props;
    return isFetching ? (
        <Overlay>
            <Container />
        </Overlay>
    ) : (
        <WrappedComponent {...otherProps} />
    );
};

export default withLoading;
