import { cilChartPie } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CCol, CRow, CWidgetStatsF } from '@coreui/react';
import useAsync from 'hooks/useAsync';
import React from 'react';
import DashboardService from 'services/DashboardService';

const Dashboard = () => {
  const { data } = useAsync(DashboardService.getStats);
  return (
    <>
      <CRow>
        <CCol xs={3}>
          <CWidgetStatsF
            className="mb-3"
            color="primary"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Total User"
            value={data?.totalUser}
          />
        </CCol>
        <CCol xs={3}>
          <CWidgetStatsF
            className="mb-3"
            color="danger"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Total Store"
            value={data?.totalStore}
          />
        </CCol>
        <CCol xs={3}>
          <CWidgetStatsF
            className="mb-3"
            color="warning"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Total Product"
            value={data?.totalProduct}
          />
        </CCol>
        <CCol xs={3}>
          <CWidgetStatsF
            className="mb-3"
            color="info"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Total Order"
            value={data?.totalOrder}
          />
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
