/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

import { WrapperPage } from '../../components/wrapper_page';
import { useGetUrlSearch } from '../../components/navigation/use_get_url_search';
import { useGetUserSavedObjectPermissions } from '../../lib/kibana';
import { SpyRoute } from '../../utils/route/spy_routes';
import { getCaseUrl } from '../../components/link_to';
import { navTabs } from '../home/home_navigations';
import { CaseView } from './components/case_view';
import { savedObjectReadOnlyErrorMessage, CaseCallOut } from './components/callout';

export const CaseDetailsPage = React.memo(() => {
  const userPermissions = useGetUserSavedObjectPermissions();
  const { detailName: caseId } = useParams();
  const search = useGetUrlSearch(navTabs.case);

  if (userPermissions != null && !userPermissions.read) {
    return <Redirect to={getCaseUrl(search)} />;
  }

  return caseId != null ? (
    <>
      <WrapperPage noPadding>
        {userPermissions != null && !userPermissions?.crud && userPermissions?.read && (
          <CaseCallOut
            title={savedObjectReadOnlyErrorMessage.title}
            messages={[{ ...savedObjectReadOnlyErrorMessage }]}
          />
        )}
        <CaseView caseId={caseId} userCanCrud={userPermissions?.crud ?? false} />
      </WrapperPage>
      <SpyRoute />
    </>
  ) : null;
});

CaseDetailsPage.displayName = 'CaseDetailsPage';
