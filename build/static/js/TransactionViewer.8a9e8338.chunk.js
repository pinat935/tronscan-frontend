(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1401:function(e,a,t){e.exports=t.p+"static/media/logo_default.22fc28d0.png"},1425:function(e,a,t){"use strict";t.d(a,"a",function(){return s});var n=t(3),c=t(0),r=t.n(c),l=t(256);function s(e){var a=e.label,t=e.children,c=e.tip,s=void 0!==c&&c,m=e.text;return r.a.createElement("tr",null,r.a.createElement("th",null,Object(n.c)(a),s&&r.a.createElement("span",null,"\xa0",r.a.createElement(l.a,{text:m,className:"ml-2"}))),r.a.createElement("td",null,t))}},2696:function(e,a,t){"use strict";t.d(a,"a",function(){return N});var n=t(2),c=t.n(n),r=t(5),l=t(13),s=t(12),m=t(21),o=t(19),d=t(20),i=t(0),E=t.n(i),b=t(2897),_=t.n(b),u=t(8),f=t(3),N=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(m.a)(this,Object(o.a)(a).call(this))).initCameras=Object(r.a)(c.a.mark(function a(){var t;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,_.a.Camera.getCameras();case 3:if(!((t=a.sent).length>0)){a.next=9;break}return a.next=7,e.scanner.start(t[0]);case 7:a.next=10;break;case 9:e.setState({error:E.a.createElement(u.a,{color:"warning",className:"text-center"},Object(f.c)("no_webcam_found"))});case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),e.setState({error:E.a.createElement(u.a,{color:"danger",className:"text-center"},Object(f.c)("trying_enable_webcam_message_0")," ",E.a.createElement("br",null),Object(f.c)("trying_enable_webcam_message_1"))});case 15:case"end":return a.stop()}},a,null,[[0,12]])})),e.state={error:null},e.ref=E.a.createRef(),e}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.onScan;this.scanner=new _.a.Scanner({video:this.ref.current,backgroundScan:!1}),this.scanner.addListener("scan",function(a){e({code:a})}),this.initCameras()}},{key:"componentWillUnmount",value:function(){this.scanner.stop()}},{key:"render",value:function(){var e=this.state.error;return e||E.a.createElement("video",{className:"w-100",style:v.video,ref:this.ref})}}]),a}(E.a.Component),v={video:{}}},3523:function(e,a,t){"use strict";t.r(a);var n=t(38),c=t.n(n),r=t(2),l=t.n(r),s=t(5),m=t(13),o=t(12),d=t(21),i=t(19),E=t(20),b=t(0),_=t.n(b),u=t(3),f=t(10),N=t(16),v=t(374),O=t(51),h=t.n(O),p=t(6),T=t(23),x=t(1425),j=t(137),g=t(58),C=t(36),y=t(263),w=function(e){var a=e.contract_address,t=e.method,n=Object(u.c)("trigger_smart_contract"),c=Object(u.c)("normal_address_trigger_smart_contract");return p.w&&a===p.H.SIDECHAIN&&t.includes(p.M.WITHDRAW)&&(n=Object(u.c)("sign_trigger_smart_contract"),c=Object(u.c)("sign_normal_trigger_smart_contract")),_.a.createElement("h5",null,_.a.createElement("i",{className:"fa fa-exchange-alt"}),n,_.a.createElement("small",null,c))};function A(e){var a=e.contract,n=["MAINTENANCE_TIME_INTERVAL","ACCOUNT_UPGRADE_COST","CREATE_ACCOUNT_FEE","TRANSACTION_FEE","ASSET_ISSUE_FEE","WITNESS_PAY_PER_BLOCK","WITNESS_STANDBY_ALLOWANCE","CREATE_NEW_ACCOUNT_FEE_IN_SYSTEM_CONTRACT","CREATE_NEW_ACCOUNT_BANDWIDTH_RATE","ALLOW_CREATION_OF_CONTRACTS","REMOVE_THE_POWER_OF_THE_GR","ENERGY_FEE","EXCHANGE_CREATE_FEE","MAX_CPU_TIME_OF_ONE_TX","ALLOW_UPDATE_ACCOUNT_NAME","ALLOW_SAME_TOKEN_NAME"];if(a.parameters)for(var c in a.parameters)for(var r in n)c===r&&(n[c],a.parameters[c]);var l,s=[];if(s.push(a),s&&(l=Object(g.a)(s,"asset_name","amount")[0]),a.contractType)switch(a.contractType.toUpperCase()){case"TRANSFERCONTRACT":return _.a.createElement(b.Fragment,null,_.a.createElement("div",{className:"card-body table-title"},_.a.createElement("h5",null,_.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("transfer_contract"),_.a.createElement("small",null,Object(u.c)("TRX_transfer_between_addresses")))),_.a.createElement("div",{className:"table-responsive"},_.a.createElement("table",{className:"table"},_.a.createElement("tbody",null,_.a.createElement(x.a,{label:"from"},_.a.createElement(T.a,{address:a.owner_address},a.owner_address)),_.a.createElement(x.a,{label:"to"},_.a.createElement(T.a,{address:a.to_address},a.to_address)),_.a.createElement(x.a,{label:"amount"},_.a.createElement(j.b,{amount:a.amount/p.E})),a.contract_note&&_.a.createElement(x.a,{label:"note"},decodeURIComponent(a.contract_note))))));case"TRANSFERASSETCONTRACT":return _.a.createElement(b.Fragment,null,_.a.createElement("div",{className:"card-body table-title"},_.a.createElement("h5",null,_.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("transfer_asset_contract"),_.a.createElement("small",null,Object(u.c)("token_transfer_between_addresses")))),_.a.createElement("div",{className:"table-responsive"},_.a.createElement("table",{className:"table"},_.a.createElement("tbody",null,_.a.createElement(x.a,{label:"from"},_.a.createElement(T.a,{address:a.owner_address},a.owner_address)),_.a.createElement(x.a,{label:"to"},_.a.createElement(T.a,{address:a.to_address},a.to_address)),_.a.createElement(x.a,{label:"amount"},l.map_amount),_.a.createElement(x.a,{label:"token"},_.a.createElement(y.a,{value:a,notamount:!0,totoken:!0}))))));case"PARTICIPATEASSETISSUECONTRACT":return _.a.createElement(b.Fragment,null,_.a.createElement("div",{className:"card-body table-title"},_.a.createElement("h5",null,_.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("participate_asset_issue_contract"),_.a.createElement("small",null,Object(u.c)("participate_token_between_addresses")))),_.a.createElement("div",{className:"table-responsive"},_.a.createElement("table",{className:"table"},_.a.createElement("tbody",null,_.a.createElement(x.a,{label:"to"},_.a.createElement(T.a,{address:a.owner_address},a.owner_address)),_.a.createElement(x.a,{label:"issuer"},_.a.createElement(T.a,{address:a.to_address},a.to_address)),_.a.createElement(x.a,{label:"amount"},a.amount/p.E),_.a.createElement(x.a,{label:"token"},_.a.createElement(y.a,{value:a,notamount:!0,totoken:!0}))))));case"WITNESSUPDATECONTRACT":return _.a.createElement(b.Fragment,null,_.a.createElement("div",{className:"card-body table-title"},_.a.createElement("h5",null,_.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("witness_update_contract"),_.a.createElement("small",null,Object(u.c)("updates_a_witness")))),_.a.createElement("table",{className:"table"},_.a.createElement("tbody",null,_.a.createElement(x.a,{label:"owner_address"},_.a.createElement(T.a,{address:a.owner_address})),_.a.createElement(x.a,{label:"URL"},a.url))));case"WITNESSCREATECONTRACT":return _.a.createElement(b.Fragment,null,_.a.createElement("div",{className:"card-body table-title"},_.a.createElement("h5",null,_.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("witness_create_contract"),_.a.createElement("small",null,Object(u.c)("create_a_witness")))),_.a.createElement("table",{className:"table"},_.a.createElement("tbody",null,_.a.createElement(x.a,{label:"owner_address"},_.a.createElement(T.a,{address:a.owner_address})),_.a.createElement(x.a,{label:"URL"},a.url))));case"ACCOUNTUPDATECONTRACT":return _.a.createElement(b.Fragment,null,_.a.createElement("div",{className:"card-body table-title"},_.a.createElement("h5",null,_.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("account_update_contract"),_.a.createElement("small",null,Object(u.c)("update_account_name")))),_.a.createElement("table",{className:"table"},_.a.createElement("tbody",null,_.a.createElement(x.a,{label:"owner_address"},_.a.createElement(T.a,{address:a.owner_address})),_.a.createElement(x.a,{label:"account_name"},Object(C.toUtf8)(a.account_name)))));case"ACCOUNTCREATECONTRACT":return _.a.createElement(b.Fragment,null,_.a.createElement("div",{className:"card-body table-title"},_.a.createElement("h5",null,_.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("account_create_contract"),_.a.createElement("small",null,Object(u.c)("account_create")))),_.a.createElement("table",{className:"table"},_.a.createElement("tbody",null,_.a.createElement(x.a,{label:"create_from_address"},_.a.createElement(T.a,{address:a.owner_address})),_.a.createElement(x.a,{label:"create_to_address"},_.a.createElement(T.a,{address:a.account_address})))));case"WITHDRAWBALANCECONTRACT":return _.a.createElement(b.Fragment,null,_.a.createElement("div",{className:"card-body table-title"},_.a.createElement("h5",null,_.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("withdraw_balance_contract"),_.a.createElement("small",null,Object(u.c)("withdraw_balance")))),_.a.createElement("table",{className:"table"},_.a.createElement("tbody",null,_.a.createElement(x.a,{label:"owner_address"},_.a.createElement(T.a,{address:a.owner_address})))));case"FREEZEBALANCECONTRACT":return _.a.createElement(b.Fragment,null,_.a.createElement("div",{className:"card-body table-title"},_.a.createElement("h5",null,_.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("freeze_balance_contract"),_.a.createElement("small",null,Object(u.c)("freeze_TRX")))),_.a.createElement("table",{className:"table"},_.a.createElement("tbody",null,_.a.createElement(x.a,{label:"owner_address"},_.a.createElement(T.a,{address:a.owner_address})),a.receiver_address&&_.a.createElement(x.a,{label:"receive_list"},_.a.createElement(T.a,{address:a.receiver_address})),a.resource?_.a.createElement(x.a,{label:"type"},a.resource):_.a.createElement(x.a,{label:"type"},"Bandwidth"),_.a.createElement(x.a,{label:"frozen_balance"},a.frozen_balance/p.E),_.a.createElement(x.a,{label:"frozen_days"},a.frozen_duration))));case"UNFREEZEBALANCECONTRACT":return _.a.createElement(b.Fragment,null,_.a.createElement("div",{className:"card-body table-title"},_.a.createElement("h5",null,_.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("unfreeze_balance_contract"),_.a.createElement("small",null,Object(u.c)("unfreeze_TRX")))),_.a.createElement("table",{className:"table"},_.a.createElement("tbody",null,_.a.createElement(x.a,{label:"owner_address"},_.a.createElement(T.a,{address:a.owner_address})),a.receiver_address&&_.a.createElement(x.a,{label:"receive_list"},_.a.createElement(T.a,{address:a.receiver_address})))));case"VOTEWITNESSCONTRACT":return _.a.createElement(b.Fragment,null,_.a.createElement("div",{className:"card-body table-title"},_.a.createElement("h5",null,_.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("vote_witness_contract"),_.a.createElement("small",null,Object(u.c)("vote_for_a_witness")))),_.a.createElement("table",{className:"table"},_.a.createElement("tbody",null,_.a.createElement(x.a,{label:"owner_address"},_.a.createElement(T.a,{address:a.owner_address})),_.a.createElement("tr",null,_.a.createElement("th",null,Object(u.c)("votes")),_.a.createElement("td",null,_.a.createElement("ul",null,a.votes.map(function(e,a){return _.a.createElement("li",{key:a},_.a.createElement(T.a,{address:e.vote_address,truncate:!1}),Object(u.c)("counts")," : ",e.vote_count)})))))));case"ASSETISSUECONTRACT":return _.a.createElement(b.Fragment,null,_.a.createElement("div",{className:"card-body table-title"},_.a.createElement("h5",null,_.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("asset_issue_contract"),_.a.createElement("small",null,Object(u.c)("issue_a_new_asset")))),_.a.createElement("table",{className:"table"},_.a.createElement("tbody",null,_.a.createElement(x.a,{label:"owner_address"},_.a.createElement(T.a,{address:a.owner_address})),_.a.createElement(x.a,{label:"token_name"},Object(C.toUtf8)(a.name)),_.a.createElement(x.a,{label:"total_supply"},_.a.createElement(f.c,{value:a.total_supply/(a.precision?Math.pow(10,a.precision):1)})),_.a.createElement(x.a,{label:"TRX_exchange_rate"},a.trx_num/p.E," : ",a.num),_.a.createElement(x.a,{label:"start_time"},a.end_time-a.start_time>1e3?_.a.createElement(f.a,{value:a.start_time}):"-"),_.a.createElement(x.a,{label:"end_time"},a.end_time-a.start_time>1e3?_.a.createElement(f.a,{value:a.end_time}):"-"),_.a.createElement(x.a,{label:"description"},Object(C.toUtf8)(a.description)),_.a.createElement(x.a,{label:"URL"},_.a.createElement(T.d,{url:Object(C.toUtf8)(a.url)})))));case"PROPOSALCREATECONTRACT":return _.a.createElement(b.Fragment,null,_.a.createElement("div",{className:"card-body table-title"},_.a.createElement("h5",null,_.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("proposal_create_contract"),_.a.createElement("small",null,Object(u.c)("proposal_create")))),_.a.createElement("table",{className:"table"},_.a.createElement("tbody",null,_.a.createElement(x.a,{label:"owner_address"},_.a.createElement(T.a,{address:a.owner_address})))));case"TRIGGERSMARTCONTRACT":a.method;var m=t(1401);return _.a.createElement(b.Fragment,null,_.a.createElement("div",{className:"card-body table-title"},w(a)),_.a.createElement("div",{className:"content"},_.a.createElement("div",{className:"content_pos"},_.a.createElement("div",{className:"d-flex border-bottom pt-2"},_.a.createElement("div",{className:"content_box_name"},Object(u.c)("Basic_info")),_.a.createElement("div",{className:"flex1"},_.a.createElement("div",{className:"d-flex border-bottom content_item"},_.a.createElement("div",{className:"content_name"},Object(u.c)("contract_triggers_owner_address"),":"),_.a.createElement("div",{className:"flex1"},_.a.createElement(T.a,{address:a.owner_address},a.owner_address))),_.a.createElement("div",{className:"d-flex border-bottom content_item"},_.a.createElement("div",{className:"content_name"},Object(u.c)("contract_address"),":"),_.a.createElement("div",{className:"flex1"},_.a.createElement(T.a,{address:a.contract_address,isContract:!0},a.contract_address))),_.a.createElement("div",{className:"d-flex content_item"},_.a.createElement("div",{className:"content_name"},Object(u.c)("value"),":"),a.call_value?_.a.createElement(j.b,{amount:a.call_value/p.E}):_.a.createElement(j.b,{amount:0})))),a.tokenTransferInfo&&void 0!==a.tokenTransferInfo.decimals&&void 0!==a.tokenTransferInfo.symbol&&_.a.createElement("div",{className:"d-flex border-bottom pt-2"},_.a.createElement("div",{className:"content_box_name"},Object(u.c)("TRC20_transfers")),_.a.createElement("div",{className:"flex1"},_.a.createElement("div",{className:"d-flex border-bottom content_item"},_.a.createElement("div",{className:"content_name"},Object(u.c)("from"),":"),_.a.createElement("div",{className:"flex1"},_.a.createElement(T.a,{address:a.tokenTransferInfo.from_address},a.tokenTransferInfo.from_address))),_.a.createElement("div",{className:"d-flex border-bottom content_item"},_.a.createElement("div",{className:"content_name"},Object(u.c)("to"),":"),_.a.createElement("div",{className:"flex1"},_.a.createElement(T.a,{address:a.tokenTransferInfo.to_address},a.tokenTransferInfo.to_address))),_.a.createElement("div",{className:"d-flex border-bottom content_item"},_.a.createElement("div",{className:"content_name"},Object(u.c)("amount"),":"),_.a.createElement("div",{className:"flex1"},Number(a.tokenTransferInfo.amount_str)/Math.pow(10,a.tokenTransferInfo.decimals))),_.a.createElement("div",{className:"d-flex border-bottom content_item"},_.a.createElement("div",{className:"content_name"},Object(u.c)("token_txs_info"),":"),_.a.createElement("div",{className:"flex1"},a.tokenTransferInfo.contract_address==p.j||a.tokenTransferInfo.contract_address==p.k||a.tokenTransferInfo.contract_address==p.i?_.a.createElement("b",{className:"token-img-top",style:{marginRight:5}},_.a.createElement("img",{width:20,height:20,src:a.tokenTransferInfo.icon_url,alt:a.tokenTransferInfo.name,onError:function(e){e.target.onerror=null,e.target.src=m}}),_.a.createElement("i",{style:{width:10,height:10,bottom:-5}})):_.a.createElement("img",{width:20,height:20,src:a.tokenTransferInfo.icon_url,alt:a.tokenTransferInfo.name,style:{marginRight:5},onError:function(e){e.target.onerror=null,e.target.src=m}}),_.a.createElement(T.g,{name:a.tokenTransferInfo.name,address:a.tokenTransferInfo.contract_address,namePlus:a.tokenTransferInfo.name+" ("+a.tokenTransferInfo.symbol+")"}))))),"{}"!=JSON.stringify(a.internal_transactions)&&_.a.createElement("div",{className:"d-flex border-bottom pt-2"},_.a.createElement("div",{className:"content_box_name"},Object(u.c)("Internal_txns")),_.a.createElement("div",{className:"flex1"},Object.keys(a.internal_transactions).map(function(e,t){var n=[];return a.internal_transactions[e].map(function(e,a){var t=Object(g.a)(JSON.parse(e.value_info_list),"token_id","call_value")[0];n.push(_.a.createElement("div",{key:e.transaction_id,className:"d-flex align-items-center content_item"},_.a.createElement("div",{className:"d-flex"},_.a.createElement("div",{className:"mr-1"},Object(u.c)("transfers")),_.a.createElement("div",{className:"mr-1"},t.map_amount+" "+t.map_token_name_abbr),_.a.createElement("div",{className:"mr-1"},Object(u.c)("from")),_.a.createElement("div",{className:"mr-1",style:{width:"150px"}},_.a.createElement(T.c,{address:e.caller_address},e.caller_address)),_.a.createElement("div",{className:"mr-1"},Object(u.c)("to")),_.a.createElement("div",{className:"mr-1",style:{width:"150px"}},_.a.createElement(T.c,{address:e.transfer_to_address},e.transfer_to_address)))))}),n}))),"{}"!=JSON.stringify(a.cost)&&_.a.createElement("div",{className:"d-flex border-bottom pt-2"},_.a.createElement("div",{className:"content_box_name"},Object(u.c)("Fee_Consumption")),_.a.createElement("div",{className:"flex1"},Object.keys(a.cost).map(function(e){return"energy_fee"===e||"net_fee"===e?_.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},_.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(u.c)(e),":"),_.a.createElement("div",{className:"flex1"},a.cost[e]/1e6," TRX")):_.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},_.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(u.c)(e),":"),_.a.createElement("div",{className:"flex1"},a.cost[e]))}))),a.method&&_.a.createElement("div",{className:"d-flex border-bottom pt-2"},_.a.createElement("div",{className:"content_box_name"},Object(u.c)("Method_calling")),_.a.createElement("div",{className:"flex1"},_.a.createElement("div",{className:"d-flex border-bottom content_item"},_.a.createElement("div",{className:"content_name"},Object(u.c)("contract_method"),":"),_.a.createElement("div",{className:"flex1"},a.method)),a.parameter&&Object.keys(a.parameter).map(function(e){return _.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},_.a.createElement("div",{className:"content_name"},e,":"),_.a.createElement("div",{className:"flex1"},a.parameter[e]))}))))));case"UPDATEBROKERAGECONTRACT":a.method;return _.a.createElement(b.Fragment,null,_.a.createElement("div",{className:"card-body table-title"},_.a.createElement("h5",null,_.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("trigger_smart_contract"),_.a.createElement("small",null,Object(u.c)("SR_set_brokerage_contract")))),_.a.createElement("div",{className:"content"},_.a.createElement("div",{className:"content_pos"},_.a.createElement("div",{className:"d-flex border-bottom pt-2"},_.a.createElement("div",{className:"content_box_name"},Object(u.c)("Basic_info")),_.a.createElement("div",{className:"flex1"},_.a.createElement("div",{className:"d-flex border-bottom content_item"},_.a.createElement("div",{className:"content_name"},Object(u.c)("contract_triggers_owner_address"),":"),_.a.createElement("div",{className:"flex1"},_.a.createElement(T.a,{address:a.owner_address},a.owner_address))),_.a.createElement("div",{className:"d-flex border-bottom content_item"},_.a.createElement("div",{className:"content_voting"},Object(u.c)("SR_set_brokerage"),":"),_.a.createElement("div",{className:"flex1"},a.brokerage?100-a.brokerage:100," %")),_.a.createElement("div",{className:"d-flex content_item"},_.a.createElement("div",{className:"content_name"},Object(u.c)("value"),":"),a.call_value?_.a.createElement(j.b,{amount:a.call_value/p.E}):_.a.createElement(j.b,{amount:0})))),"{}"!=JSON.stringify(a.cost)&&_.a.createElement("div",{className:"d-flex border-bottom pt-2"},_.a.createElement("div",{className:"content_box_name"},Object(u.c)("Fee_Consumption")),_.a.createElement("div",{className:"flex1"},Object.keys(a.cost).map(function(e){return"energy_fee"===e||"net_fee"===e?_.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},_.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(u.c)(e),":"),_.a.createElement("div",{className:"flex1"},a.cost[e]/1e6," TRX")):_.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},_.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(u.c)(e),":"),_.a.createElement("div",{className:"flex1"},a.cost[e]))}))),a.method&&_.a.createElement("div",{className:"d-flex border-bottom pt-2"},_.a.createElement("div",{className:"content_box_name"},Object(u.c)("Method_calling")),_.a.createElement("div",{className:"flex1"},_.a.createElement("div",{className:"d-flex border-bottom content_item"},_.a.createElement("div",{className:"content_name"},Object(u.c)("contract_method"),":"),_.a.createElement("div",{className:"flex1"},a.method)),a.parameter&&Object.keys(a.parameter).map(function(e){return _.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},_.a.createElement("div",{className:"content_name"},e,":"),_.a.createElement("div",{className:"flex1"},a.parameter[e]))}))))));default:return _.a.createElement(b.Fragment,null,_.a.createElement("div",{className:"card-body table-title"},_.a.createElement("h5",null,_.a.createElement("i",{className:"fa fa-exchange-alt"}),"\xa0\xa0",a.contractType)),_.a.createElement("table",{className:"table"},_.a.createElement("tbody",null,a.owner_address?_.a.createElement(x.a,{label:"owner_address"},_.a.createElement(T.a,{address:a.owner_address})):"")))}return _.a.createElement("div",null,a.contractType&&_.a.createElement("div",{className:"card-body"},JSON.stringify(a)))}function k(e){var a=e.signature;return _.a.createElement("table",{className:"table"},_.a.createElement("tbody",null,_.a.createElement(x.a,{label:"Signature"},a.bytes)))}var S=t(14),R=Object(S.a)(function(){return t.e(14).then(t.bind(null,3507))}),I=t(31),F=t(8),M=t(2696),U=function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(d.a)(this,Object(i.a)(a).call(this))).hideModal=function(){var a=e.props.onClose;a&&a()},e.onCodeScan=function(a){var t=a.code,n=e.props.onConfirm;n&&n({code:t})},e.state={body:null},e}return Object(E.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({body:_.a.createElement("div",null,_.a.createElement(M.a,{onScan:this.onCodeScan}))})}},{key:"render",value:function(){var e=this.state.body;return _.a.createElement(F.c,{isOpen:!0,toggle:this.hideModal,fade:!1,className:"modal-dialog-centered"},_.a.createElement(F.f,{className:"text-center",toggle:this.hideModal},"Scan Transaction"),_.a.createElement(F.d,null,e))}}]),a}(_.a.Component);var D=Object(I.connect)(function(e){return{account:e.app.account}},{})(U),L=function(e){function a(e){var t;Object(m.a)(this,a),(t=Object(d.a)(this,Object(i.a)(a).call(this,e))).hideModal=function(){t.setState({modal:null})},t.setHex=function(e){t.setState({hex:e})},t.loadTransaction=function(){var e=Object(s.a)(l.a.mark(function e(a){var n,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.readTransactionNew(a);case 3:n=e.sent,(c=n.transaction)?t.setState({transactionData:c}):t.setState({modal:_.a.createElement(h.a,{danger:!0,title:Object(u.c)("transaction_load_error"),onConfirm:t.hideModal},Object(u.c)("transaction_load_error_message"))}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.setState({modal:_.a.createElement(h.a,{danger:!0,title:Object(u.c)("transaction_load_error"),onConfirm:t.hideModal},Object(u.c)("transaction_load_error_message"))});case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(a){return e.apply(this,arguments)}}(),t.scanTransaction=Object(s.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.setState({modal:_.a.createElement(D,{onClose:t.hideModal,onConfirm:function(e){var a=e.code;t.loadTransaction(a),t.hideModal(),t.setHex(a)}})});case 1:case"end":return e.stop()}},e)})),t.broadcastTransaction=function(){var e=Object(s.a)(l.a.mark(function e(a){var n,c,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.sendTransactionRaw(a);case 2:n=e.sent,c=n.success,r=n.code,c?t.setState({modal:_.a.createElement(h.a,{success:!0,title:Object(u.c)("transaction_success"),onConfirm:t.hideModal},Object(u.c)("transaction_success_message"))}):t.setState({modal:_.a.createElement(h.a,{danger:!0,title:Object(u.c)("transaction_error"),onConfirm:t.hideModal},Object(u.c)("transaction_error_message"),_.a.createElement("br",null),"Code: ",r)});case 6:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t.broadcastTransactionModal=Object(s.a)(l.a.mark(function e(){var a,n,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.hex,e.next=3,N.a.readTransactionNew(a);case 3:n=e.sent,c=n.transaction,t.setState({modal:_.a.createElement(h.a,{info:!0,showCancel:!0,confirmBtnText:Object(u.c)("confirm_transaction"),confirmBtnBsStyle:"success",cancelBtnBsStyle:"default",title:Object(u.c)("confirm_transaction_message"),onConfirm:function(){return t.broadcastTransaction(a)},onCancel:t.hideModal})}),t.setState({transactionData:c});case 7:case"end":return e.stop()}},e)})),t.addSignature=function(){var e=t.state.hex;t.setState({modal:_.a.createElement(R,{transaction:e,onClose:t.hideModal})})};var n=Object(v.a)(e.location,"hex","");return t.state={hex:n,showInput:""===n,transactionData:null,modal:null},t}return Object(E.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.state.hex;e&&this.loadTransaction(e)}},{key:"componentDidUpdate",value:function(e,a){var t=Object(v.a)(this.props.location,"hex","");""!==t&&a.hex!==t&&(this.loadTransaction(t),this.setState({hex:t}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.hex,n=a.transactionData,r=a.modal,l=a.showInput;this.props.flags;return _.a.createElement("main",{className:"container header-overlap _transactionViewer"},r,l&&_.a.createElement("div",{className:"card"},_.a.createElement("div",{className:"card-body"},_.a.createElement("h5",{className:"card-title text-center"},Object(u.c)("transaction")," HEX"),_.a.createElement("p",{className:"text-center"},Object(u.c)("info_tx_viewer")),_.a.createElement("textarea",{className:"w-100 form-control",rows:"6",value:t,onChange:function(a){return e.setState({hex:a.target.value})}}),_.a.createElement("div",{className:"text-center _load_tx"},_.a.createElement("button",{className:"btn btn-primary",disabled:""===c()(t),onClick:function(){return e.loadTransaction(t)}},Object(u.c)("load_tx"))),_.a.createElement("hr",null),_.a.createElement("div",{className:"text-center p-3 _qrcode"},_.a.createElement("h5",{className:"card-title text-center"},Object(u.c)("tx_qrcode")),_.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.scanTransaction()}},Object(u.c)("load_tx_qrcode"),_.a.createElement("i",{className:"fa fa-qrcode ml-2"}))))),n&&_.a.createElement(b.Fragment,null,_.a.createElement("div",{className:"card mt-3"},_.a.createElement("div",{className:"card-body"},_.a.createElement("h5",{className:"card-title text-center"},"Transaction")),_.a.createElement("div",{className:"table-responsive"},_.a.createElement("table",{className:"table"},_.a.createElement("tbody",null,_.a.createElement(x.a,{label:"timestamp"},_.a.createElement(f.a,{value:n.timestamp}),"\xa0",_.a.createElement(f.e,{value:n.timestamp,hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})),_.a.createElement(x.a,{label:"contracts"},n.contracts.length),_.a.createElement(x.a,{label:"signatures"},n.signatures.length))))),_.a.createElement("div",{className:"card mt-3"},_.a.createElement("div",{className:"card-header text-center"},Object(u.c)("Contracts")),n.contracts.map(function(e,a){return _.a.createElement(A,{key:a,contract:e})})),_.a.createElement("div",{className:"card mt-3"},_.a.createElement("div",{className:"card-header text-center"},Object(u.c)("Signatures")),n.signatures.map(function(e){return _.a.createElement(k,{signature:e})})),_.a.createElement("div",{className:"card mt-3 mb-5"},_.a.createElement("button",{className:"btn btn-success btn-lg",onClick:this.broadcastTransactionModal},Object(u.c)("broadcast_transaction_to_network")))))}}]),a}(b.Component);a.default=Object(I.connect)(function(e){return{flags:e.app.flags}},{})(L)}}]);