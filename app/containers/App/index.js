/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import appTheme from 'theme';
import { Grommet, ResponsiveContext } from 'grommet';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { getHeaderHeight } from 'utils/responsive';

import reducer from 'containers/App/reducer';
import saga from 'containers/App/saga';
import { loadConfig, navigate, setLayerInfo } from 'containers/App/actions';
import {
  selectRouterPath,
  selectPageSearch,
  selectInfoSearch,
  selectLocale,
} from 'containers/App/selectors';

import ModuleStories from 'containers/ModuleStories/Loadable';
import ModuleExplore from 'containers/ModuleExplore/Loadable';
import ModuleTransfers from 'containers/ModuleTransfers/Loadable';
import Header from 'containers/Header';
import Map from 'containers/Map';
import Page from 'containers/Page';
import LayerInfo from 'containers/LayerInfo';
import CookieConsent from 'containers/CookieConsent';

import { ROUTES, CONFIG, MODULES } from 'config';
import GlobalStyle from 'global-styles';
import { appLocales, DEFAULT_LOCALE } from 'i18n';

import commonMessages from 'messages';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

const AppIframeShadow = styled.div`
  pointer-events: none;
  box-shadow: inset 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999999;
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  top: ${getHeaderHeight('small')}px;
  @media (min-width: ${({ theme }) => theme.sizes.medium.minpx}) {
    top: ${getHeaderHeight('medium')}px;
  }
  @media (min-width: ${({ theme }) => theme.sizes.large.minpx}) {
    top: ${getHeaderHeight('large')}px;
  }
  @media (min-width: ${({ theme }) => theme.sizes.xlarge.minpx}) {
    top: ${getHeaderHeight('xlarge')}px;
  }
  @media (min-width: ${({ theme }) => theme.sizes.xxlarge.minpx}) {
    top: ${getHeaderHeight('xxlarge')}px;
  }
`;

function App({
  onLoadConfig,
  path,
  page,
  info,
  onClosePage,
  onCloseLayerInfo,
  intl,
}) {
  useInjectReducer({ key: 'global', reducer });
  useInjectSaga({ key: 'default', saga });
  useEffect(() => {
    onLoadConfig();
  }, []);

  const { locale } = intl;

  // figure out route for Brand element colours
  const paths = path.split('/');
  const route = paths.length > 1 ? paths[2] : '';
  const title = intl.formatMessage(commonMessages.appTitle);
  const activeModule = Object.values(MODULES).find(m => m.path === route);
  const showMapKey = activeModule && activeModule.showKey;
  return (
    <Grommet theme={appTheme}>
      <AppWrapper>
        <Helmet titleTemplate={`%s - ${title}`} defaultTitle={title}>
          <meta name="description" content="" />
        </Helmet>
        <Header route={route} />
        <Content>
          <ResponsiveContext.Consumer>
            {size => <Map size={size} hasKey={showMapKey} />}
          </ResponsiveContext.Consumer>
          <Switch>
            <Route
              path={`/:locale(${appLocales.join('|')})/${ROUTES.INTRO}/`}
              component={ModuleStories}
            />
            <Route
              path={`/:locale(${appLocales.join('|')})/${ROUTES.EXPLORE}/`}
              component={ModuleExplore}
            />
            <Route
              path={`/:locale(${appLocales.join('|')})/${ROUTES.TRANSFERS}/`}
              component={ModuleTransfers}
            />
            <Redirect to={`/${locale || DEFAULT_LOCALE}/${ROUTES.INTRO}/`} />
          </Switch>
          {page !== '' && <Page page={page} onClose={() => onClosePage()} />}
          {info !== '' && (
            <LayerInfo id={info} onClose={() => onCloseLayerInfo()} />
          )}
        </Content>
        {!window.wwfMpxInsideIframe && <CookieConsent />}
        {window.wwfMpxInsideIframe && <AppIframeShadow />}
        <GlobalStyle />
      </AppWrapper>
    </Grommet>
  );
}

App.propTypes = {
  onLoadConfig: PropTypes.func,
  onClosePage: PropTypes.func,
  onCloseLayerInfo: PropTypes.func,
  path: PropTypes.string,
  page: PropTypes.string,
  info: PropTypes.string,
  intl: intlShape.isRequired,
};

const mapStateToProps = createStructuredSelector({
  path: state => selectRouterPath(state),
  page: state => selectPageSearch(state),
  info: state => selectInfoSearch(state),
  locale: state => selectLocale(state),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadConfig: () => {
      Object.keys(CONFIG).forEach(key => {
        dispatch(loadConfig(key));
      });
    },
    onClosePage: () =>
      dispatch(
        navigate(null, {
          deleteSearchParams: ['page'],
        }),
      ),
    onCloseLayerInfo: () => dispatch(setLayerInfo()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(injectIntl(App));
