import HomeFooter from "@/components/Reusable/HomeFooter";
import TopNavBarAddon from "@/components/Reusable/TopNavBarAddon";
import TopNavBarMain from "@/components/Reusable/TopNavBarMain";
import Head from "next/head";
import {Button, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import ls from "@/styles/ContactUsPage/HomeSectionRight.module.css";
import {FaExchangeAlt, FaPaperPlane} from "react-icons/fa";
import {useState} from "react";
import axios from "axios";
import {wait} from "next/dist/build/output/log";


function ToOtherPiWallet() {

    const [amount, setAmount] = useState('');
    const [recipient_wallet, setRecipientWallet] = useState('');
    let [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false)
    let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text-plain, */*',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const scopes = ['username', 'payments'];
        window.Pi.init({ version: "2.0", sandbox: true});

        async function auth() {
            try {
                // Identify the user with their username / unique network-wide ID, and
                // get permission to request payments from them.
                const scopes = ['username', 'payments'];
                function onIncompletePaymentFound(payment) {

                    var data = {
                        'action': 'complete',
                        'paymentId': payment.identifier,
                        'txid': payment.transaction.txid,
                        'app_client': 'auth_example'
                    };
                    return axios.post( "https://mypipay-api.herokuapp.com/complete-payment", data).then(function(data) {
                        // $("#button_click").prop( "disabled", false );
                    });
                }; // Read more about this in the SDK reference

                window.Pi.authenticate(scopes, onIncompletePaymentFound).then(function(auth) {
                   /* $( "#button_click" ).click(function() {
                        if(parseFloat($("#pi_donate").val()) > 0)
                        {
                            $("#button_click").prop( "disabled", true );
                            /!*setTimeout(function ()
                            {
                                $("#button_click").prop( "disabled", false );
                            }, 10000);*!/

                        }
                        //alert("Click");
                    });*/
                    transfer();
                    //alert('Hello ' + auth.user.username);
                }).catch(function(error) {
                    console.error(error);
                });
            } catch (err) {
                console.log(err)
               // alert(err);
                // Not able to fetch the user
            }
        }

        async function transfer() {
            try {
                const payment = window.Pi.createPayment({
                    // Amount of π to be paid:
                    amount: amount,
                    to_address: recipient_wallet,
                    // An explanation of the payment - will be shown to the user:
                    memo: "Demo transfer request", // e.g: "Digital kitten #1234",
                    // An arbitrary developer-provided metadata object - for your own usage:
                    metadata: { paymentType: "transfer demo" /* ... */ }, // e.g: { kittenId: 1234 }
                }, {
                    // Callbacks you need to implement - read more about those in the detailed docs linked below:
                    onReadyForServerApproval: function(paymentId) {
                        let data = {
                            'action': 'approve',
                            'paymentId': paymentId,
                            'txid': '',
                            'app_client': 'auth_example'
                        };
                        return axios.post( "https://mypipay-api.herokuapp.com/approve-payment", data).then(function(data) {
                           // $("#button_click").prop( "disabled", false );
                        });
                    },
                    onReadyForServerCompletion: function(paymentId, txid) {
                        let data = {
                            'action': 'complete',
                            'paymentId': paymentId,
                            "txid": txid,
                            'app_client': 'auth_example'
                        };
                        return axios.post( "https://mypipay-api.herokuapp.com/complete-payment", data).then(function(data) {
                           // $("#button_click").prop( "disabled", false );
                        });
                    },
                    onCancel: function(paymentId) {},
                    onError: function(error, payment) {console.log(error);},
                });
            } catch(err) {
                console.log(err);
                // alert(err);
            }
        }

        auth();

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
