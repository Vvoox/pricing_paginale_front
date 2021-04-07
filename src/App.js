/** @jsx jsx */
import React, { useState } from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import Payment from "./Payment"

import PricingService from "./services/pricingService";


const List = styled.ul`
list-style: none;

> li {
  margin: 0 0 10px;
  color: rgba(0,0,0,0.7);
  position: relative;
}

li::before {
  color: rgba(0,0,0,0.2);
  content: "•";
  display: inline-block;
  font-size: 1em;
  left: -1.1225em;
  position: absolute;
  top: 0em;
}
`

function App() {
  const [term, setTerm] = useState("month")
  const [activePlan, setActivePlan] = useState(null)
  const [success, setSuccess] = useState(null)
  const [state, setState] = useState({ screen: "signup" })

  // if (state.screen === "finished" && success) {
  //   return (
  //     <div className="pa5 lh-title">
  //       <h3 css={css`
  //         max-width: 30rem;
  //       `}>Thanks for signing up {success.customerName}. We've sent you an email to confirm your account details.</h3>
  //     </div>
  //   )
  // }

    const startedBasicPlanMonthly= (e) => {PricingService.addBasicCharge_month().then(r => {window.location.replace(r.data);});}
    const startedCreativePlanMonthly= (e) => {PricingService.addCreativeCharge_monthly().then(r => {window.location.replace(r.data);});}
    const startedPreiumPlanMonthly= (e) => {PricingService.addPremiumCharge_monthly().then(r => {window.location.replace(r.data);});}

    const startedBasicPlanYearly= (e) => {PricingService.addBasicCharge_yearly().then(r => {window.location.replace(r.data);});}
    const startedCreativePlanYearly= (e) => {PricingService.addCreativeCharge_yearly().then(r => {window.location.replace(r.data);});}
    const startedPreiumPlanYearly= (e) => {PricingService.addPremiumCharge_yearly().then(r => {window.location.replace(r.data);});}


    return (
    <div className="flex flex-column flex-row-ns pa3 pa5-ns">
      <div css={css`
        flex: 1;
        margin-bottom: 30px;
        @media screen and (min-width: 768px) {
          padding-right: 40px;
        }
      `}>
        <h3 className="lh-title f2 fw6">No additional costs.<br />Pay for what you use.</h3>

        <div className="mt4 ba b--blue br2 flex" css={css`
          max-width: 260px;
        `}>
          <span
            className={`flex-auto pointer pa2 tc ${term === "month" ? "bg-blue white" : "blue"}`}
            onClick={() => setTerm("month")}
          >
            Monthly
          </span>
          <span
            className={`flex-auto pointer pa2 tc ${term === "year" ? "bg-blue white" : "blue"}`}
            onClick={() => setTerm("year")}
          >
            Yearly
          </span>
        </div>
      </div>
      <div css={css`
        flex: 1;
        display: flex;
        flex-direction: column;
        min-width: 260px;
        margin-bottom: 30px;
        border: solid 1px #d7d7d7;
        @media screen and (min-width: 768px) {
          margin-right: 40px;
        }
      `}>
        {term === "year" ?
          <React.Fragment>
            <div className="bg-blue pa3">
              <h1 className="white ma0 fw4 f3">Basic plan</h1>
              <h2 className="white flex items-start mb0">
                <small className="fw4">$</small>
                <span className="f1 fw6">79.99</span>
                <small className="self-end fw4">/year</small>
              </h2>
            </div>
            <div className="pa3" css={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            `}>
              <List>
                <li> 5 Forms maximum</li>
                <li> Thank you page</li>
                <li> Upsells page</li>
              </List>

              <button
                className={`db br2 tc w-100 mt4 pointer bg-lightest-blue fw6 dark-blue`}
                css={css`
                  padding: 14px;
                  border: none;
                  -webkit-appearance: none;
                  outline: none;
                `}
                onClick={() => startedBasicPlanYearly()}
              >
                Get Started
              </button>
            </div>
          </React.Fragment>
        :
          <React.Fragment>
            <div className="bg-blue pa3">
              <h1 className="white ma0 fw4 f3">Basic plan</h1>
              <h2 className="white flex items-start mb0">
                <small className="fw4">$</small>
                <span className="f1 fw6">6.99</span>
                <small className="self-end fw4">/month</small>
              </h2>
            </div>
            <div className="pa3" css={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            `}>
              <List>
                      <li> 5 Forms maximum</li>
                      <li> Thank you page</li>
                      <li> Upsells page</li>
              </List>

              <button
                className={`db br2 tc w-100 mt4 pointer bg-lightest-blue fw6 dark-blue`}
                css={css`
                  padding: 14px;
                  border: none;
                  -webkit-appearance: none;
                  outline: none;
                `}
                onClick={() => startedBasicPlanMonthly()}
              >
                Get Started
              </button>
            </div>
          </React.Fragment>
        }
      </div>

        <div css={css`
        flex: 1;
        display: flex;
        flex-direction: column;
        min-width: 260px;
        margin-bottom: 30px;
        border: solid 1px #d7d7d7;
        @media screen and (min-width: 768px) {
          margin-right: 40px;
        }
      `}>
            {term === "year" ?
                <React.Fragment>
                    <div className="bg-blue pa3">
                        <h1 className="white ma0 fw4 f3">Creative plan</h1>
                        <h2 className="white flex items-start mb0">
                            <small className="fw4">$</small>
                            <span className="f1 fw6">149.99</span>
                            <small className="self-end fw4">/year</small>
                        </h2>
                    </div>
                    <div className="pa3" css={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            `}>
                        <List>
                            <li> 10 forms maximum</li>
                            <li> Thank you page</li>
                            <li> Upsells page with 5 products maximum</li>
                        </List>

                        <button
                            className={`db br2 tc w-100 mt4 pointer bg-lightest-blue fw6 dark-blue`}
                            css={css`
                  padding: 14px;
                  border: none;
                  -webkit-appearance: none;
                  outline: none;
                `}
                            onClick={() => startedCreativePlanYearly()}
                        >
                            Get Started
                        </button>
                    </div>
                </React.Fragment>
                :
                <React.Fragment>
                    <div className="bg-blue pa3">
                        <h1 className="white ma0 fw4 f3">Creative plan</h1>
                        <h2 className="white flex items-start mb0">
                            <small className="fw4">$</small>
                            <span className="f1 fw6">12.99</span>
                            <small className="self-end fw4">/month</small>
                        </h2>
                    </div>
                    <div className="pa3" css={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            `}>
                        <List>
                            <li> 10 forms maximum</li>
                            <li> Thank you page</li>
                            <li> Upsells page with 5 products maximum</li>
                        </List>

                        <button
                            className={`db br2 tc w-100 mt4 pointer bg-lightest-blue fw6 dark-blue`}
                            css={css`
                  padding: 14px;
                  border: none;
                  -webkit-appearance: none;
                  outline: none;
                `}
                            onClick={() => startedCreativePlanMonthly()}
                        >
                            Get Started
                        </button>
                    </div>
                </React.Fragment>
            }
        </div>
        <div css={css`
        flex: 1;
        display: flex;
        flex-direction: column;
        min-width: 260px;
        margin-bottom: 30px;
        border: solid 1px #d7d7d7;
        @media screen and (min-width: 768px) {
          margin-right: 40px;
        }
      `}>
            {term === "year" ?
                <React.Fragment>
                    <div className="bg-blue pa3">
                        <h1 className="white ma0 fw4 f3">Premium plan</h1>
                        <h2 className="white flex items-start mb0">
                            <small className="fw4">$</small>
                            <span className="f1 fw6">165.99</span>
                            <small className="self-end fw4">/year</small>
                        </h2>
                    </div>
                    <div className="pa3" css={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            `}>
                        <List>
                            <li> Unlimited number of forms</li>
                            <li> Thank you page</li>
                            <li> Upsells page with unlimited products suggestions</li>
                        </List>

                        <button
                            className={`db br2 tc w-100 mt4 pointer bg-lightest-blue fw6 dark-blue`}
                            css={css`
                  padding: 14px;
                  border: none;
                  -webkit-appearance: none;
                  outline: none;
                `}
                            onClick={() => startedPreiumPlanYearly()}
                        >
                            Get Started
                        </button>
                    </div>
                </React.Fragment>
                :
                <React.Fragment>
                    <div className="bg-blue pa3">
                        <h1 className="white ma0 fw4 f3">Premium plan</h1>
                        <h2 className="white flex items-start mb0">
                            <small className="fw4">$</small>
                            <span className="f1 fw6">13.99</span>
                            <small className="self-end fw4">/month</small>
                        </h2>
                    </div>
                    <div className="pa3" css={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            `}>
                        <List>
                            <li> Unlimited number of forms</li>
                            <li> Thank you page</li>
                            <li> Upsells page with unlimited products suggestions</li>
                        </List>

                        <button
                            className={`db br2 tc w-100 mt4 pointer bg-lightest-blue fw6 dark-blue`}
                            css={css`
                  padding: 14px;
                  border: none;
                  -webkit-appearance: none;
                  outline: none;
                `}
                            onClick={() => startedPreiumPlanMonthly()}
                        >
                            Get Started
                        </button>
                    </div>
                </React.Fragment>
            }
        </div>

      {activePlan &&
        <Payment
          embedURL={activePlan}
          onSuccess={data => {
            console.log("Payment success", data)
            setSuccess(data)
          }}
          onFailure={err => {
            console.error("Payment failed", err)
          }}
          onClose={() => {
            console.log("onClose fired")
            setState({ ...state, screen: "finished" })
            setActivePlan(null)
          }}
        />
      }
    </div>
  )
}

export default App
