import React from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Layout from '../components/Layout';
import MainWrapper from '../components/MainWrapper';
import OpportunityInvestmentPage from "./OpportunityInvestmentPage";
import OpportunityInvestmentDetail from "./OpportunityInvestmentPage/OpportunityInvestmentDetail";
import DownloadPage from "./DownloadPage";
import ReferralPage from "./ReferralPage";
import ParticipationPage from "./ParticipationPage";
import ParticipationDetail from "./ParticipationPage/ParticipationDetail";
import InvestmentPage from "./InvestmentPage"
import InvestmentDetail from "./InvestmentPage/InvestmentDetail";
class MainApp extends React.Component {
    render() {
        const {match} = this.props;
        return (
            <>
                <Layout/>
                <MainWrapper>
                    <Switch>
                        <Route exact path={`${match.url}/opportunity-investment`} component={OpportunityInvestmentPage}/>
                        <Route exact path={`${match.url}/opportunity-investment/detail`} component={OpportunityInvestmentDetail}/>
                        <Route exact path={`${match.url}/downloads`} component={DownloadPage}/>
                        <Route exact path={`${match.url}/referrals`} component={ReferralPage}/>
                        <Route exact path={`${match.url}/participation`} component={ParticipationPage}/>
                        <Route exact path={`${match.url}/participation/detail`} component={ParticipationDetail}/>
                        <Route exact path={`${match.url}/investment`} component={InvestmentPage}/>
                        <Route exact path={`${match.url}/investment/detail`} component={InvestmentDetail}/>
                    </Switch>
                </MainWrapper>
            </>
        );
    }
}


const mapStateToProps = ({auth}) => {
    const {authUser} = auth;
    return {authUser}
};
export default withRouter(connect(mapStateToProps)(MainApp));