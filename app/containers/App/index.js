/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import { injectIntl, intlShape } from 'react-intl';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Grommet } from 'grommet';
import theme from 'theme';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import reducer from 'containers/App/reducer';
import saga from 'containers/App/saga';

import RouteHome from 'containers/RouteHome/Loadable';
import RoutePage from 'containers/RoutePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'containers/Header';
import { getHeaderHeight } from 'utils/responsive';

import { ROUTES } from 'config';
import GlobalStyle from 'global-styles';
import { appLocales } from 'i18n';

import ScrollToTop from './ScrollToTop';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

const Content = styled.div`
  position: relative;
  padding-top: ${getHeaderHeight('small')}px;
  @media (min-width: ${props => props.theme.sizes.medium.minpx}) {
    padding-top: ${getHeaderHeight('medium')}px;
  }
  @media (min-width: ${props => props.theme.sizes.large.minpx}) {
    padding-top: ${getHeaderHeight('large')}px;
  }
  @media (min-width: ${props => props.theme.sizes.xlarge.minpx}) {
    padding-top: ${getHeaderHeight('xlarge')}px;
  }
  @media (min-width: ${props => props.theme.sizes.xxlarge.minpx}) {
    padding-top: ${getHeaderHeight('xxlarge')}px;
  }
`;

function App() {
  useInjectReducer({ key: 'global', reducer });
  useInjectSaga({ key: 'default', saga });
  return (
    <Grommet theme={theme}>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Marine Plastic Explorer"
          defaultTitle="Marine Plastic Explorer"
        >
          <meta name="description" content="" />
        </Helmet>
        <Header />
        <Content>
          <ScrollToTop>
            <Switch>
              <Route
                exact
                path={[`/${ROUTES.HOME}`, `/:locale(${appLocales.join('|')})`]}
                component={RouteHome}
              />
              <Route
                path={[
                  `/${ROUTES.PAGE}/:id`,
                  `/:locale(${appLocales.join('|')})/${ROUTES.PAGE}/:id`,
                ]}
                component={RoutePage}
              />
            </Switch>
          </ScrollToTop>
        </Content>
        <GlobalStyle />
      </AppWrapper>
    </Grommet>
  );
}

// App.propTypes = {
//   intl: intlShape.isRequired,
// };

// export default injectIntl(App);
// export default App;

// App.propTypes = {};

// export function mapDispatchToProps(dispatch) {
//   return {
//   };
// }
//
// const withConnect = connect(
//   null,
//   mapDispatchToProps,
// );

export default App;
