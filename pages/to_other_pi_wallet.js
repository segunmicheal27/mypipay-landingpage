import HomeFooter from "@/components/Reusable/HomeFooter";
import TopNavBarAddon from "@/components/Reusable/TopNavBarAddon";
import TopNavBarMain from "@/components/Reusable/TopNavBarMain";
import Head from "next/head";
import {Button, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import ls from "@/styles/ContactUsPage/HomeSectionRight.module.css";
import {FaExchangeAlt, FaPaperPlane} from "react-icons/fa";
import {useState} from "react";
import axios from "axios";


function ToOtherPiWallet() {

    const [amount, setAmount] = useState('');
    const [recipient_wallet, setRecipientWallet] = useState('');
    let [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false)
    let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text-plain, */*',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*'
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const scopes = ['username', 'payments'];
        window.Pi.init({ version: "2.0", sandbox: true});
        const authResult =  (scopeData, methodCallBack) => {
            window.Pi.authenticate(scopeData, methodCallBack)
        }
        const onIncompletePaymentFound = async (payment) => {
            console.log("onIncompletePaymentFound", payment);
        }
        authResult(scopes, onIncompletePaymentFound);

        async function fetchData(method, url, data) {
            const response = await fetch(url, {
                method: method,
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: headers,
                body: JSON.stringify(data)
            }).then(response => {
                console.log(response)
                if (!response.ok) {
                    throw new Error("Failed with HTTP code " + response.status);
                }
                return response;
            }).then(response => response.json());
            console.log(response);
            return response
        }

        const paymentData = {
            amount: amount,
            memo: "Demo Topup wallet",
            to_address: recipient_wallet,
            metadata: { pieId: 1 },
        }

        console.log(paymentData);

        const onReadyForServerApproval = async (paymentId) => {
            console.log("onReadyForServerApproval", paymentId);
            fetchData('post', 'https://mypipay-api.herokuapp.com/approve-payment',
                { 'payment_id': paymentId}, headers );
        }

        const onReadyForServerCompletion = async (paymentId, txid) => {
            console.log("onReadyForServerCompletion", paymentId);
             fetchData('post', 'https://mypipay-api.herokuapp.com/approve-payment/complete-payment',
                 {
                     'payment_id': paymentId,
                     'txid': txid
                 }, headers );

        }

        const onCancel = async (paymentId) => {
            console.log("onCancel", paymentId);
            // fetchData('post', '/cancel', {paymentId}, headers )
        }
        const onError = ( error, payment) => {
            console.log("onError", error);
            if (payment){
                console.log(payment)
            }
        }

        const paymentMethodCallbacks = {
            onReadyForServerApproval: onReadyForServerApproval,
            onReadyForServerCompletion: onReadyForServerCompletion,
            onCancel: onCancel,
            onError: onError,
        };

        window.Pi.createPayment(paymentData, paymentMethodCallbacks);
    }

    return (
        <>
            <Head>
                <title>MyPiPay</title>
                <meta name="description" content="Borderless Transactions" />
            </Head>
            <Container fluid className="p-0 mb-2">
                <Row className="g-0">
                    <Col xs={12} sm={12} md={12} lg={9} xl={8} xxl={8}>
                        <TopNavBarMain />
                    </Col>
                    <Col lg={3} xl={4} xxl={4}>
                        <TopNavBarAddon />
                    </Col>
                </Row>
            </Container>

            <Container className="my-5">
                <Row>
                    <Col xs={12} lg={8} className="order-first order-lg-last">
                        <div className={`${ls.section} mb-5`}>
                            <div>
                                <Form onSubmit={handleSubmit}>
                                    <Row className="mb-3 gy-3">
                                        <Col xs={12}>
                                            <FormControl
                                                type="number"
                                                placeholder="Amount to transfer: 20"
                                                name="amount"
                                                className={`${ls.custom_input}`}
                                                onChange={(e)=>{setAmount(e.target.value)}}
                                                min={1}
                                                step={1}
                                                required
                                            />
                                        </Col>
                                        <Col xs={12}>
                                            <FormControl
                                                type="text"
                                                placeholder="Enter recipient wallet address"
                                                name="recipient_wallet"
                                                className={`${ls.custom_input}`}
                                                onChange={(e)=>{setRecipientWallet(e.target.value)}}
                                                required
                                            />
                                        </Col>
                                        <Col xs={12}>
                                            <Button type="submit" className={`${ls.send_message_btn} w-100`}>
                                                <FaExchangeAlt /> Send
                                            </Button>
                                        </Col>
                                        <Col xs={12}>
                                            <div>
                                                {message}
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <HomeFooter />
        </>
    );
}

export default ToOtherPiWallet;
