console.log('v4');
var CONFIG = {        
    templateName: decodeURIComponent(window.epochSubs.getAllUrlParams().tn),
    return_url: window.epochSubs.getAllUrlParams().return_url ? decodeURIComponent(window.epochSubs.getAllUrlParams().return_url) : false,
    skipLists: window.epochSubs.getAllUrlParams().skipLists ? decodeURIComponent(window.epochSubs.getAllUrlParams().skipLists) : false,       
    yearlyPlan: "digitalonly_fullsubscription_99_yearly",
    originalPlan: window.epochSubs.getAllUrlParams().originalPlan ? decodeURIComponent(window.epochSubs.getAllUrlParams().originalPlan) : false,
    sourceTemplate: window.epochSubs.getAllUrlParams().sourceTemplate ? decodeURIComponent(window.epochSubs.getAllUrlParams().sourceTemplate) : false,
    offerAnnualUpgrade: window.epochSubs.getAllUrlParams().offerAnnualUpgrade == "true" ? true : false,
    updateName: window.epochSubs.getAllUrlParams().updateName == "true" ? true : false,
    subscription_id: window.epochSubs.getAllUrlParams().subscription_id ? decodeURIComponent(window.epochSubs.getAllUrlParams().subscription_id) : false,
    userEmail: decodeURIComponent(window.epochSubs.getAllUrlParams().userEmail),
    defaultLists: window.epochSubs.getAllUrlParams().defaultLists ? decodeURIComponent(window.epochSubs.getAllUrlParams().defaultLists) : false,
    lists: window.epochSubs.getAllUrlParams().lists ? decodeURIComponent(window.epochSubs.getAllUrlParams().lists) : false,
    userToken: window.userId.cookies.get("epoch_token"),
    phone: window.epochSubs.getAllUrlParams().phone ? window.epochSubs.getAllUrlParams().phone : '',
    userId: window.userId.cookies.payload.epoch_user_id,
};

if(["digitalonly_fullsubscription_1usd_week_1styear", "digitalonly_fullsubscription_1usd_w_4usd_w_1styear", "digitalonly_fullsubscription_1_5usd_w_4usd_w_1styear"].includes(CONFIG.originalPlan)) {
    CONFIG.templateName += "_$40Annual";
    CONFIG.yearlyPlan = "digitalonly_fullsubscription_40_yearly_1styear";
    $('.confirmation-dialog .normal-rate').hide();
    $('.confirmation-dialog .discounted-rate').show();

}



$(document).ready(function () {
    
    if(window.epochSubs.isMobileDevice()) {
        $('body').addClass("mobile");
    }

    if (CONFIG.phone) {
        $('#phone-number-input').val(CONFIG.phone);
    }

    loadEmailSettings();

    if(CONFIG.offerAnnualUpgrade) {
        $('.step-upgrade-offer').fadeIn("slow");
        window.epochSubs.trackGAEvent(
            "paywall:Popup",
            "Impression",
            CONFIG.templateName + "--AnnualUpgrade"
        );
    } else {
        if(CONFIG.updateName) {

            $('.step-update-name').fadeIn("slow");
            window.epochSubs.trackGAEvent(
                "paywall:Popup",
                "Impression",
                CONFIG.templateName + "--UpdateName"
            );
        } else {

           $('.step-upgrade-offer').hide()
           $('.step_survey_your_opinion').fadeIn("slow");        
            window.epochSubs.trackGAEvent(
                "paywall:Popup",
                "Impression",
                CONFIG.templateName + "_Survey_3Q_v1"
            );
            // $('.step-lists').fadeIn("slow");        
            //     window.epochSubs.trackGAEvent(
            //         "paywall:Popup",
            //         "Impression",
            //         CONFIG.templateName + "_NewsletterPreferences"
            //     );
        }
    }

    
    
    // track impression
    window.epochSubs.trackGAEvent(
        "paywall:Popup",
        "Impression",
        CONFIG.templateName
    );

    $('.annualupgrade-continue').click(function(e) {
        e.preventDefault();
        if(CONFIG.updateName) {
            $('.step-upgrade-offer').hide()
            $('.step-update-name').fadeIn("slow");
            window.epochSubs.trackGAEvent(
                "paywall:Popup",
                "Impression",
                CONFIG.templateName + "--UpdateName"
            );
        } else {
            $('.step-upgrade-offer').hide()
            $('.step_survey_your_opinion').fadeIn("slow");        
            window.epochSubs.trackGAEvent(
                "paywall:Popup",
                "Impression",
                CONFIG.templateName + "_Survey_3Q_v1"
            );
            // $('.step-lists').fadeIn("slow");        
            // window.epochSubs.trackGAEvent(
            //     "paywall:Popup",
            //     "Impression",
            //     CONFIG.templateName + "_NewsletterPreferences"
            // );
        }
        
    })
    

    $('.updatename-continue').click(function(e) {
        e.preventDefault();

        if($('#update-name-first').val() == "" || $('#update-name-last').val() == "") {
            $('#update-name-error').show();
            window.epochSubs.trackGAEvent(
                "paywall:Popup",
                "Impression",
                CONFIG.templateName + "--UpdateName"
            );

        } else {
            $('#update-name-error').hide();
            $('.step-update-name').hide()
            $('.step_survey_your_opinion').fadeIn("slow");        
            window.epochSubs.trackGAEvent(
                "paywall:Popup",
                "Impression",
                CONFIG.templateName + "_Survey_3Q_v1"
            );
            // $('.step-lists').fadeIn("slow");        
            // window.epochSubs.trackGAEvent(
            //     "paywall:Popup",
            //     "Impression",
            //     CONFIG.templateName + "_NewsletterPreferences"
            // );

            window.epochSubs.trackDataEvent({
                category: "Update Name After Subscription",
                label: CONFIG.subscription_id,
                tags: CONFIG.userEmail,
                action: $('#update-name-first').val() + " " + $('#update-name-last').val()
            });
            
            try {
                updateCustomerName($('#update-name-first').val(), $('#update-name-last').val());
            } catch (e) {
                console.log(e);
            }

        }
    })

    $(".survey_your_opinion_continue").click(function (e) {
        sendSurveyData();
        $('.step_survey_your_opinion').hide();
        $('.step-lists').fadeIn("slow");        
        window.epochSubs.trackGAEvent(
            "paywall:Popup",
            "Impression",
            CONFIG.templateName + "NewsletterPreferences"
        );
    });

    function sendSurveyData(){
        let survey_session_id = makeid(12),
            user_id = CONFIG.userId,
            user_email = CONFIG.userEmail,
            subscription_id = CONFIG.subscription_id;


        let data_1 = {
            campaign: "Onboarding Survey 3 Qs v1",
            question_name: "1) Why almost didn't subscribe?",
            question_text: "What almost prevented you from subscribing?",
            answer: $("#almost_prevented_you").val(),
            survey_session_id: survey_session_id,
            user_email: user_email,
            user_id: user_id,
            subscription_id: subscription_id,
            metadata: "",
            project: "www.theepochtimes.com"
        }



        let data_2 = {
            campaign: "Onboarding Survey 3 Qs v1",
            question_name: "2) Why did subscribe?",
            question_text: "What helped you overcome any concerns or hesitations about subscribing today?",
            answer:$("#helped_you_overcome").val(),
            survey_session_id: survey_session_id,
            user_email: user_email,
            user_id: user_id,
            subscription_id: subscription_id,
            metadata: "",
            project: "www.theepochtimes.com"
        }


        let data_3 = {
            campaign: "Onboarding Survey 3 Qs v1",
            question_name: "3) What 3 benefits you expect?",
            question_text: "What are the top 3 features or benefits you expect to get with your subscription?",
            answer: $("#three_top_features").val(),
            survey_session_id: survey_session_id,
            user_email: user_email,
            user_id: user_id,
            subscription_id: subscription_id,
            metadata: "",
            project: "www.theepochtimes.com"
        }

        if(data_1.answer.length > 0 ){
            submitSurveyAnswer(data_1);
        }
        
        if(data_2.answer.length > 0 ){
            submitSurveyAnswer(data_2);
        }
        
        if(data_3.answer.length > 0 ){
            submitSurveyAnswer(data_3);
        }
        
    }

    $('.app-continue').click(function (e) {
        e.preventDefault();
        $('.step-app').hide()

        checkIfDisplaySeatsSection().then(function(displaySeats) 
        {
                console.log("displaySeats", displaySeats);
                if(displaySeats){
                    $('#welcome_back_over_wrapper').fadeIn("slow");
                    window.epochSubs.trackGAEvent(
                        "paywall:Popup",
                        "Impression",
                        CONFIG.templateName + "--Seats"
                    );
                    window.epochSubs.trackDataEvent({
                        category: "Subs Onboarding",
                        action: "Seats Screen Impression",
                        metadata: CONFIG.templateName
                    });
                }else{
                    displayBillingDatesOrVideoStep();
                }
        });
    });

    $('.invite-continue').click(function (e) {
        e.preventDefault();
        $('#welcome_back_over_wrapper').hide();

       displayBillingDatesOrVideoStep();
    })
         
     $('.flexibile-dates-continue-btn').click(function (e) {
        e.preventDefault();
        $('.flexibile_billing_date').hide()
        $('.step-video').fadeIn("slow");
        window.epochSubs.trackGAEvent(
            "paywall:Popup",
            "Impression",
            CONFIG.templateName + "--Video"
        );
    })


    window.addEventListener("message", function (message) {
        try {
            let data = JSON.parse(message.data);
            if(data.module == "ONBOARDING" && data.action == "NEWSLETTER-CONTINUE") {
                showNextStep();
           }        
        } catch (e) {
            console.log(e);
        }
    }, false);

    $('#upgrade-yearly-submit').click(function (e) {
        e.preventDefault();
        upgradeToAnnualPlan();
    });


    $('#sms-app-form').submit(function () {
        try {
        sendAppDownloadLink(CONFIG.subscription_id, $('#phone-number-input').val());
        } catch (e) {console.log(e)}
        return false;
    })

    $('.final-continue-reading').click(function (e) {
        e.preventDefault();
        window.parent.postMessage(JSON.stringify({
            module: "CHECKOUT",
            action: "REDIRECT"
        }), "*");
    });


    $('.set-billing-date-btn').click(function (e) {
       
       startSetBillingDateProcess();
       
    });

    initInvites();
})

function displayBillingDatesOrVideoStep(){

    $('.step-video').fadeIn("slow");
    window.epochSubs.trackGAEvent(
        "paywall:Popup",
        "Impression",
        CONFIG.templateName + "--Video"
    );

    // checkIfDisplayFlexibleBillingDates().then(function(displayFlexibleBillingDates) 
    // {
    //     console.log("displayFlexibleBillingDates", displayFlexibleBillingDates);

    //     if(displayFlexibleBillingDates)
    //     {
    //             $('.flexibile_billing_date').fadeIn("slow");
    //             setupFlexibileBillingDates();
    //             window.epochSubs.trackGAEvent(
    //                 "paywall:Popup",
    //                 "Impression",
    //                 CONFIG.templateName + "--Flexibile billing date"
    //             );
    //     }
    //     else{
    //             $('.step-video').fadeIn("slow");
    //             window.epochSubs.trackGAEvent(
    //                 "paywall:Popup",
    //                 "Impression",
    //                 CONFIG.templateName + "--Video"
    //             );
    //         }  
    // });
}

async function updateCustomerName(firstName, lastName) {    
    if(window.userId.cookies.payload.epoch_token) {
        API.udpateCustomerName({
            token: window.userId.cookies.payload.epoch_token,
            firstName: firstName,
            lastName: lastName
        })
    } else {
        API.udpateCustomerName({
            subscription_id: CONFIG.subscription_id,
            firstName: firstName,
            lastName: lastName
        })
    }
}

async function checkIfDisplaySeatsSection(){
    try{

    if(CONFIG.userToken && CONFIG.userToken !== "undefined" && CONFIG.userToken.length > 0)
    {
        // console.log("userToken is ",  CONFIG.userToken);  
        let unused_seats = 0, seats_index = 0;
        let input_seat_group = "";
        let seats = await API.getUserSeats();
        // console.log("seats: ", seats);

          $.each(seats.data, function (key, data) {
            //    console.log("data: ", data);
               if (data.status === "unused" && data.seat_cost === "free") {

                    let top_spacing = unused_seats === 0 ? " mt-0 mt-lg-4 pt-2" : " mt-4 pt-2";

                    input_seat_group = `<div class="input-group ${top_spacing} mx-auto input-group-seats-email">
                                            <input type="text" class="form-control enter_email_input" data-seat-index = ${seats_index} placeholder="Enter Email" aria-label="Enter email">
                                            <div class = "seat_assign_success text-success mobile" data-seat-index = ${seats_index}></div>
                                            <div class = "seat_assign_err text-danger mobile" data-seat-index = ${seats_index}></div>
                                            <div class="input-group-append">
                                                <button class="btn enter_email_btn w-100 mt-3 mt-md-0" type="button" data-seat-index = ${seats_index}>
                                                <span class="spinner-grow spinner-grow-sm enter_email_btn_spinner" role="status" aria-hidden="true" data-seat-index = ${seats_index} style="display:none"></span>
                                                    Grant Free Subscription
                                                </button>
                                            </div>
                                        </div>
                                        <div class = "seat_assign_success text-success desktop" data-seat-index = ${seats_index}></div>
                                        <div class = "seat_assign_err text-danger desktop" data-seat-index = ${seats_index}></div>`;

                    $("#welcome_back_over_wrapper .email_seat_group_wrapper").append(input_seat_group);  

                    unused_seats++;
                    seats_index++;                  
                }
          });
          
         

        //   console.log("unused_seats ",  unused_seats);  
          if(unused_seats > 0){
            $("#welcome_back_over_wrapper .seats_no").text(unused_seats);
            if(unused_seats === 1){
                $("#welcome_back_over_wrapper .one_sub").show();
                $("#welcome_back_over_wrapper .many_subs").hide();
            } else if(unused_seats > 1){
                $("#welcome_back_over_wrapper .one_sub").hide();
                $("#welcome_back_over_wrapper .many_subs").show();
            }
            return true;
          }
        
    } 
    else{
        console.log("userToken is not set, user is not logged in");
    }   
    }catch(err)
    {
        console.log("error in checkIfDisplaySeatsSection", err);
    }

    return false;
}

async function checkIfDisplayFlexibleBillingDates()
{
    try{

    $(".main-loader").show();
    if(CONFIG.userToken && CONFIG.userToken !== "undefined" && CONFIG.userToken.length > 0)
    {
        // console.log("userToken is ",  CONFIG.userToken);  
        let [billing_date, isTrial] = await getBillingDate();
        let cardTypeRes = await API.getCardType();
        let cardType = "";

        if(cardTypeRes.status === "ok" && cardTypeRes.data)
        {
            cardType = cardTypeRes.data;
            console.log("user card type is", cardType);
        }

        window.billing_date = billing_date;
        console.log("window.billing_date", window.billing_date);
        console.log("This sub is trial = ",  isTrial);  

        if (!isTrial && cardType === "debit")
        {
            return true;
        }
    } 
    else{
        console.log("userToken is not set, user is not logged in");
        $(".main-loader").hide();
    }   
    }catch(err)
    {
        console.log("error in checkIfDisplayFlexibleBillingDates", err);
         $(".main-loader").hide();
    }

    return false;
}

async function startSetBillingDateProcess()
{
    let selectedDateObj = new Date($(".flexibile_billing_date #datepicker" ).datepicker("getDate" ));
       billing_date = window.billing_date;
       let newEndTerm = Math.round(selectedDateObj.getTime()/1000);

       if(selectedDateObj > billing_date)
        {
            let difference= Math.abs(selectedDateObj-billing_date);
            let dayDiff = parseInt(difference/(1000 * 3600 * 24));     

            if(selectedDateObj > billing_date && dayDiff >=0 && dayDiff <= 30){
                setNewBillingDate(selectedDateObj);
            
            }
             else
                {
                    $(".error-info").text("Please choose 1 day, within 30 days after the billing date.");
                }
        } 
        else
            {
                $(".error-info").text("Please choose 1 day, within 30 days after the billing date.");
            }
}


async function setNewBillingDate(selectedDateObj)
{
     let newUnixTerm = Math.round(selectedDateObj.getTime()/1000);
     let billing_date_str = selectedDateObj.toLocaleDateString("en-US");

    try{
        $(".set-billing-date-btn").addClass("disabled");
        $(".spinner-set").show();
        let res = await API.setFlexibleDateEstimation(newUnixTerm);
        console.log("setFlexibleDateEstimation res", res);
        if(res.status === "ok")
        {
            window.epochSubs.trackDataEvent({
                user_id: window.userId.cookies.payload.epoch_user_id,
                category: "SUCCESS Set Flexible Billing Date",
                action: billing_date_str,
                label: CONFIG.subscription_id,
                metadata: CONFIG.templateName,
                page: window.location.href,
                json_data: JSON.stringify(res)
            });
            $(".success-info").text("The new billing date has been set!");
            $(".set-billing-date-btn").removeClass("disabled");
            $(".spinner-set").hide();
            $(".set-billing-date-btn").addClass("d-none");
            $(".flexibile-dates-continue-btn").text("Continue");
            $(".datepicker-col").hide();
            $(".today-charge").hide();
            $(".flexibile_billing_date .current_billing_is").text(`Current next billing date is ${billing_date_str}.`);

        }

    }catch(err)
    {
         $(".error-info").text("Something went wrong. Please reach customer service.");
        console.log("error in setNewBillingDate", err);
         $(".set-billing-date-btn").removeClass("disabled");
         $(".spinner-set").hide();
    }

}


 function englishOrdinalSuffix(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
}

async function showEstiamtes(newEndTerm, dayDiff, formattedDate)
{
    let estimation = "", estimationStr = "", days = "";

    try{
            $(".flexibile_billing_date .estimated-days-value").removeClass("text-danger");
            $(".flexibile_billing_date .estimated-days-value").addClass("font-weight-bold");
            $(".flexibile_billing_date .estimated-days-value").text("");

            let estimationRes = await API.getFlexibleDateEstimation(newEndTerm);
            if(estimationRes.status === "ok"){
                estimation = estimationRes.data;
            }
            if(dayDiff === 1)
            {
                days = "day";
            }
            else{
                days = "days";
            }

            estimationStr = `Today you will be charged for <span class="font-weight-bold">${dayDiff}</span> <span class="font-weight-bold">${days}</span>, <span class="font-weight-bold">$${parseFloat(estimation/100).toFixed(2)}</span>, and your next billing date will be <span class="font-weight-bold">${formattedDate}</span>.`;
            $(".flexibile_billing_date .today-charge").html(estimationStr);
            $('.today-charge').show();

    }catch(err){
        console.log("error in showEstiamtes", err);
        $(".flexibile_billing_date .estimated-days-value").addClass("text-danger");
        $(".flexibile_billing_date .estimated-days-value").removeClass("font-weight-bold");
        $(".flexibile_billing_date .estimated-days-value").text("There was an error while estimating the value");
    }
}

async function getBillingDate()
{
    let billing_date ="", isTrial = 0;

    try{
            let billing_date_res = await API.listSubscription();
            console.log("billing_date_res", billing_date_res);
            
            if(billing_date_res.status === "ok" && billing_date_res.data)
            {
                let customers = billing_date_res.data;              
                for (let customer in customers) 
                {
                    let subscription = customers[customer];
                    for (let sub in subscription) 
                    {
                        if(subscription[sub].planId.indexOf('trial') !== -1)
                        {
                            isTrial = 1;
                            billing_date = new Date(subscription[sub].currentTermEnd);
                        }
                        else
                        {
                            isTrial = 0;
                            billing_date = new Date(subscription[sub].currentTermEnd);
                        }
                    }
                }
            }
        }catch(err){
            console.log("error in getBillingDate", err);
        }
    return [ billing_date, isTrial ];
}


async function setupFlexibileBillingDates()
{
    let formattedDate = "";
    let day = 0, monthNameLong = "";
    let billing_date = "";
    let billing_date_res = {};
    let estimation = 0, estimationRes = "", dayDiff = 0, newEndTerm = 0;

    try{
        billing_date = window.billing_date;

        console.log("Existing billing date:", billing_date);
        console.log("Current Sub Id:", CONFIG.subscription_id);

        // billing_date = new Date("3/5/2022");
        let billing_date_str = billing_date.toLocaleDateString("en-US");

        // day = billing_date.getDate();
        // monthNameLong = billing_date.toLocaleString("en-US", { month: "long" });
        // formattedDate = monthNameLong +" "+ day+""+englishOrdinalSuffix(day);   
        // $(".flexibile_billing_date .selected-date").text(formattedDate);

        $(".flexibile_billing_date .current_billing_is").text(`Current next billing date is ${billing_date_str}. You can select any day within 30 days from ${billing_date_str}`);
            
        $(".flexibile_billing_date #datepicker" ).datepicker({
            defaultDate:  billing_date,
            setDate:  billing_date,
            beforeShowDay: function(datetoDisplay){

                let datetoDisplayNoTime = new Date(datetoDisplay.toDateString());
                let billing_dateNoTime = new Date(billing_date.toDateString());

                // console.log("datetoDisplayNoTime", datetoDisplayNoTime);
                // console.log("billing_dateNoTime", billing_dateNoTime);

                if(datetoDisplayNoTime >= billing_dateNoTime){
                    let difference= Math.abs(datetoDisplayNoTime-billing_dateNoTime);
                    let dayDiff = parseInt(difference/(1000 * 3600 * 24));  

                    if( dayDiff >=0 && dayDiff <= 30){
                        return [true];
                    }
                    else{
                         return [false];
                    }
                }
                else{
                    return [false];
                }
            },
            onSelect: function(selectedDate) {
            
                let selectedDateObj = new Date(selectedDate);
                $(".success-info").text("");
                $(".error-info").text("");
                console.log("selectedDateObj", selectedDateObj);
                console.log("billing_date", billing_date);

                newEndTerm = Math.round(selectedDateObj.getTime()/1000);
                console.log("newEndTerm", newEndTerm);
                
                if(selectedDateObj > billing_date)
                {
                let difference= Math.abs(selectedDateObj-billing_date);
                dayDiff = parseInt(difference/(1000 * 3600 * 24));     
                console.log("dayDiff", dayDiff);

                    if(selectedDateObj > billing_date && dayDiff >=0 && dayDiff <= 30){
                        $('.set-billing-date-btn').show();
                        day = selectedDateObj.getDate();        
                        monthNameLong = selectedDateObj.toLocaleString("en-US", { month: "long" });
                        formattedDate = monthNameLong +" "+ day+""+englishOrdinalSuffix(day);

                        showEstiamtes(newEndTerm, dayDiff, formattedDate);
                    }
                    else
                    {
                        $(".success-info").text("");
                        $(".error-info").text("Please choose 1 day, within 30 days after the billing date.");
                        $(".flexibile_billing_date .selected-date").text("");
                        $(".flexibile_billing_date .estimated-days-value").text("");
                        $('.set-billing-date-btn').hide();
                        $('.today-charge').hide();
                    }
                }
                else
                    {
                        $(".success-info").text("");
                        $(".error-info").text("Please choose 1 day, within 30 days after the billing date.");
                        $(".flexibile_billing_date .selected-date").text("");
                        $(".flexibile_billing_date .estimated-days-value").text("");
                        $('.set-billing-date-btn').hide();  
                        $('.today-charge').hide();                  
                    }
            }
        });
    }catch(err){
        console.log("error in setupFlexibileBillingDates", err);

    }
}


async function initInvites() {    
    
    try {
        window.userProfile = (await ETUtils.APIs.prepareProfile({ email: CONFIG.userEmail })).data;
    }
    catch (e) {
        console.log(e);
    }
    
    iShareInviteWidget.templateName = CONFIG.templateName;
    iShareInviteWidget.init();    
}

function validateUserEmail(user_email){
    let mailformat = /^\w+([\+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if(typeof user_email !== "undefined" && 
        user_email !== "undefined" && 
        user_email.length > 0 && 
        user_email.match(mailformat))
    {
        // console.log("Valid email address!");
        return true;
    }
    return false;
}

$(document).on("click", "#welcome_back_over_wrapper .enter_email_btn", async function () {

    let btn_index = $(this).data("seat-index");
    let user_email =  $('.enter_email_input[data-seat-index=' + btn_index + ']').val();
    console.log("btn_index = " + btn_index);
    console.log("user email = " + user_email);

    // debugger;

    if(!validateUserEmail(user_email)){
         $('.seat_assign_err[data-seat-index=' + btn_index + ']').text("Please enter a valid email address.");
         $('.seat_assign_success[data-seat-index=' + btn_index + ']').text("");
        return;
    }

    $('.enter_email_btn[data-seat-index=' + btn_index + ']').attr("disabled", "disabled");
    $('.enter_email_btn_spinner[data-seat-index=' + btn_index + ']').show();

    try{

        let res = await API.assignFreeSeatToUser(user_email);
        if(res.status === "ok"){
            $('.seat_assign_success[data-seat-index=' + btn_index + ']').text(`You have successfully assigned subscription to ${user_email} .`);
            $('.seat_assign_err[data-seat-index=' + btn_index + ']').text("");
            $('.enter_email_btn[data-seat-index=' + btn_index + ']').hide();

            window.epochSubs.trackDataEvent({
                category: "Extra Seats",
                action: "Assign Free Seat",
                label: user_email,
                metadata: CONFIG.templateName,
                src_tmp: CONFIG.templateName
            });
        }
        
        $('.enter_email_btn[data-seat-index=' + btn_index + ']').removeAttr("disabled");
        $('.enter_email_btn_spinner[data-seat-index=' + btn_index + ']').hide();

    }catch(err){
        console.log("Error while assigning seat to " + user_email, err);
        
        if (err && err.responseJSON && err.responseJSON.error === "guest is already customer") {
            $('.seat_assign_err[data-seat-index=' + btn_index + ']').text("This user is already a customer.");
            $('.seat_assign_success[data-seat-index=' + btn_index + ']').text("");
        } else {
            $('.seat_assign_err[data-seat-index=' + btn_index + ']').text("An error occurred, please try again later.");
           $('.seat_assign_success[data-seat-index=' + btn_index + ']').text("");
        }
         $('.enter_email_btn[data-seat-index=' + btn_index + ']').removeAttr("disabled");
         $('.enter_email_btn_spinner[data-seat-index=' + btn_index + ']').hide();

         window.epochSubs.trackDataEvent({
            category: "ERROR Extra Seats",
            action: "Assign Free Seat",
            label: user_email,
            metadata: CONFIG.templateName,
            src_tmp: CONFIG.templateName,
            json_data: JSON.stringify(err)
        });
    }
   

});


$('#submit-list-settings').click(function (e) {
    e.preventDefault();    
    $('#submit-list-settings').hide();
    $('#list-settings-submit-loader').show();

    window.userId.getUserInfo().then(function (r) { 
        let checks = $('.list-checkbox:checked');
        let selectedLists = "Jlid8tcrj";

        $('.list-checkbox:checked').each(function (e) { 
            selectedLists += "," + $(this).attr("data-listid");
        })  

        console.log("Subscribing to lists: " + selectedLists);
        let fields = {
            email: r.email,
            lists: selectedLists
        }

        // track impression
        window.epochSubs.trackGAEvent(
            "paywall:Popup",
            "Impression",
            CONFIG.templateName + "_continueReading"
        );

        $.ajax({
            method: "POST",
            type: "POST",
            url: "https://subsapi.epoch.cloud/db/senddata",
            contentType : "application/json",
            dataType: "json",
            data: JSON.stringify({
                "destination": 'newsletter_preregistration',
                "fields": fields,
            }),
            success: function (r) {
                continueReading();
            },
            error: function (r) {
                console.log('preregister failed')
                continueReading();
            }
        })
    });
})

function loadEmailSettings() {
    ETUtils.renderEmailPanel({
        tid: "3b952d88-8159-4b4b-8156-a2f3649f145c",
        version: 10,
        mode: "onboarding-subs",
        userEmail: CONFIG.userEmail,
        target: '.newsletter-lists-target',
        continuePostMessage: true,
        defaultLists: CONFIG.defaultLists,
        lists: CONFIG.lists,
        subscription_id: CONFIG.subscription_id,
        delayRender: 2500
    });
}

function showNextStep() {
    $('.step-lists').hide();
    $('.step-app').fadeIn("slow");
    window.epochSubs.trackGAEvent(
        "paywall:Popup",
        "Impression",
        CONFIG.templateName + "--GetApp"
    );
}

function upgradeToAnnualPlan() {
    if($('#agree-upgrade').is(':checked')) {
        $('.agree-error-msg').hide();
        $('.submit-loader').show();

        $('#upgrade-yearly-submit').attr("disabled"); 
        let apiURL = "https://subsapi.epoch.cloud/chargebee/upgrade_plan?plan=" + CONFIG.yearlyPlan + "&subscription_id=" + CONFIG.subscription_id;
    
        if(window.userId.cookies.get('epoch_token')) {
            apiURL += "&token=" + encodeURIComponent(window.userId.cookies.get('epoch_token'));
        }
        $.ajax({
            url: apiURL,
            method: "POST",
            success: function (r) {                
                console.log('/upgrade_plan', r);
                if(r.status == "ok") {
                    showSuccess(r)
                } else {
                    showError(r);
                }                
            },
            error: function (r) {                
                showError(r);
            }
        }); 
    } else {
        $('.agree-error-msg').show();
    }        
}


function sendAppDownloadLink(subs_id, phone_number) {   
    try {
    $.ajax({
        url: "https://subsapi.epoch.cloud/chargebee/send_sms_to_download_app",
        dataType: "json",
        data: JSON.stringify({
            "subscription_id": subs_id,
            "phone_number": phone_number,
            "send_welcome_digital": true
        }),
        method: "POST",
        success: function (response) {
            console.log(response);
            $('.sms-app-error').hide();
            $('.sms-app-success').show();
            
            window.epochSubs.trackGAEvent(
                "paywall:Popup",
                "SMS App Link Sent",
                CONFIG.templateName + "GetApp"
            );

            window.epochSubs.trackDataEvent({                   
                category: 'Phone Number for App Download Successfull',                
                label: CONFIG.userEmail                                  
            });
        },
        error: function (response) {
            console.log(response);
            $('.sms-app-error').show();
        }
    });
    } catch (e) { console.log(e) }
}



function showSuccess(r) {
    $('body').addClass('success');
    $('.upgrade-message').hide()
    $('.success-message').show();
    $('.error-message').hide();

    window.epochSubs.trackDataEvent({     
        user_id: window.userId.cookies.payload.epoch_user_id,              
        category: 'Digital Subscription Upgrade',
        action: CONFIG.yearlyPlan,
        label: CONFIG.originalPlan,
        metadata: CONFIG.sourceTemplate,
        src_tmp: CONFIG.templateName,
        page: window.epochSubs.getAllUrlParams().pl,
        json_data: JSON.stringify({                                
            templateName: CONFIG.templateName,
            response: r,
            subscription_id: CONFIG.subscription_id
        })                    
    });

    /* 
    giveRestaurantGC({
        email: CONFIG.userEmail,
        subscriptionId: CONFIG.subscription_id,
        cardType: "restaurant_100"           
    })
    */
}


var iShareInviteWidget = {
    templateName: "Subs Onboarding Invites",

    init: function () {
        if (window.epochSubs.isMobileDevice()) {
            $('.email-container .friend-emails').eq(1).remove();
            $('.email-container .friend-emails').eq(1).remove();
            $('.email-container .friend-emails').eq(1).remove();
            iShareInviteWidget.addMore();
        }

        window.epochSubs.trackGAEvent(
            "iShare Widget",
            "Impression",
            iShareInviteWidget.templateName
        );

        $('#ishare-form').submit(function () {
            $('.friend-emails-input').each(function () {
                console.log($(this).attr('id'));
                if ($(this).val() != "") {
                    ETUtils.iShareEmail({
                        type: "invite",
                        inputID: $(this).attr('id'),
                        sourceEmail: CONFIG.userEmail,
                        referralCode: window.userProfile.loyalty.referral_codes.SHR,
                        utm_medium: "email",
                        utm_campaign: "reg_invite",
                        utm_term: "subs_onboarding",
                        url: "https://www.theepochtimes.com",
                        customText: $('#default-invite-text').val(),
                        customSubject: CONFIG.userEmail + " recommended you this",
                        action: "email",
                        widget: iShareInviteWidget.templateName
                    });
                }
            })
            return false;
        });

        $(document).on('click', '.add-more-button', function () {
            iShareInviteWidget.addMore();
        })

        $.getScript("https://api.cloudsponge.com/widget/uaRMQGoN7Zh9_T3vcY6eZA.js", function () {
            console.log('cloudsponge loaded')
            cloudsponge.init({
                sources: ['gmail', 'yahoo', 'outlookcom', 'office365', 'aol'],
                afterSubmitContacts: function (contacts, source, owner) {
                    console.log(contacts)
                    let c = 0;
                    for (let i in contacts) {
                        if (contacts[i].email && contacts[i].email[0] && contacts[i].email[0].address && contacts[i].email[0].address.indexOf("@") > -1) {
                            ETUtils.iShareEmail({
                                type: "invite",
                                email: contacts[i].email[0].address,
                                sourceEmail: CONFIG.userEmail,
                                referralCode: window.userProfile.loyalty.referral_codes.SHR,
                                utm_medium: "email",
                                utm_campaign: "reg_invite",
                                utm_term: "subs_onboarding",
                                url: "https://www.theepochtimes.com",
                                customText: $('#default-invite-text').text(),
                                customSubject: CONFIG.userEmail + " recommended you this",
                                action: source,
                                widget: iShareInviteWidget.templateName
                            });
                            c++;
                        }
                    }

                    $('.invites-bulk-status').html('<div class="alert alert-success">Successfully sent to ' + c + ' contacts.</div>');
                }
            });
        });
    },

    addMore: function () {
        let email_extra_box = `
            <div class="friend-emails last-one col-12 col-sm-6 my-2">
                <input placeholder="${($('.friend-emails input').length + 1)}th Friend's Email" class="friend-emails-input" name="email-input-${($('.friend-emails input').length + 1)}" id="email-input-${($('.friend-emails input').length + 1)}">
                <div class="share-status-msg" id="email-input-${($('.friend-emails input').length + 1)}-status"></div>
                <img class="add-more-button" src="https://cdn.epoch.cloud/assets/static_assets/add-more-freind-share-plus.png"></img>
            </div>`;

        $('.friend-emails').removeClass('last-one');
        $('.email-container').append(email_extra_box)
    }
}



function showError(r) {
    console.log('error', r);
    $('.error-message').show();
    $('.submit-loader').hide();
    $('#upgrade-yearly-submit').removeAttr("disabled");

    window.epochSubs.trackDataEvent({      
        user_id: window.userId.cookies.payload.epoch_user_id,              
        category: 'Error: Digital Subscription Upgrade',
        action: CONFIG.yearlyPlan,
        label: CONFIG.originalPlan,
        metadata: decodeURIComponent(window.epochSubs.getAllUrlParams().sourceTemplate),
        src_tmp: CONFIG.templateName,
        page: window.epochSubs.getAllUrlParams().pl,
        json_data: JSON.stringify({                                
            templateName: CONFIG.templateName,
            response: r,
            subscription_id: CONFIG.subscription_id
        })                    
    });
}

async function giveRestaurantGC (params) {
    var emailAddr = params.email;
    let verifyTokenResponse = await getEmailSecureToken(emailAddr);
    var verifyToken = verifyTokenResponse.data;

    grecaptcha.ready(function() {
        grecaptcha.execute('6LcmJLkZAAAAAMziOnaFrJkOV4ClF_H8OvcqvlyE', {action: 'submit'}).then(

            function(token) {

                let apiurl = "https://subsapi.epoch.cloud/giftcards/make_eligible?gc_type=" + params.cardType + "&email=" + encodeURIComponent(params.email) + "&subscription_id=" + params.subscriptionId + "&recaptcha=" + token  + "&campaign=upgrade_annual--" + params.subscriptionId;
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json",
                    url: apiurl, 
                    success: function (r) {
                        window.epochSubs.trackDataEvent({                    
                            category: 'Success Gift Card Given',
                            action: params.cardType,
                            label: emailAddr,
                            metadata: window.checkoutEngineVersion,
                            page: window.location.href,
                            json_data: JSON.stringify({
                                email: emailAddr,
                                templateID: CONFIG.templateName,
                                templateName: CONFIG.templateName,
                                response: r
                            })                    
                        });  

                        console.log('giveRestaurantGC, Claim + Verification email sent.');                        
                        try {
                            $.ajax({
                                type: "POST",
                                dataType: "json",
                                contentType: "application/json",
                                url: "https://subs.youmaker.com/send_email",
                                data: JSON.stringify({
                                    "personalizations": [{
                                        "recipient": emailAddr,
                                        "attributes": {
                                            "CLAIMLINK": "https://www.theepochtimes.com/?pipa_verify_email=" + verifyToken + "&claimrewards=1"                               
                                        }
                                    }],
                                    "from": {
                                        "fromEmail": "notification@theepochtimes.com",
                                        "fromName": "The Epoch Times"
                                    },
                                    "tags": "giftcard-claim",
                                    "subject": "Claim your $100 here",
                                    "templateId": 29664
                                }),
                                success: function (response) {
                                    console.log('welcome email', response)
                                }
                            });
                        } catch (e) {
                            console.log('send email fail:', e);
                        }
                    },
                    error: function (r)  {
                        $('.giftcard-error').show();
                        window.epochSubs.trackDataEvent({                    
                            category: 'ERROR: Giving Gift Card Failed',
                            action: params.cardType,
                            label: emailAddr,
                            metadata: window.checkoutEngineVersion,
                            page: window.location.href,
                            json_data: JSON.stringify({
                                email: emailAddr,
                                templateID: CONFIG.templateName,
                                templateName: CONFIG.templateName,
                                response: r
                            })                    
                        });                    
                    }                              
                });
            }
        )
    })
}


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function submitSurveyAnswer(data) {
    let destination = "survey_answers";
    $.ajax({
        method: "POST",
        type: "POST",
        url: "https://subsapi.epoch.cloud/db/senddata",
        contentType : "application/json",
        async: true,
        timeout: 5000,
        dataType: "json",
        data: JSON.stringify({
            "destination": destination,
            "fields": data,
        })
    });
}

async function getEmailSecureToken(email) {
return $.ajax({
    method: 'GET',
    url: 'https://subsapi.epoch.cloud/get_email_secure_token?days_expire=30&email=' + encodeURIComponent(email),
    dataType: 'json'
});
}

const API = {

    listSubscription: async function () {
        return $.ajax({
            type: "GET",
            dataType: "json",
            contentType: "application/json",
            url: "https://subs.youmaker.com/chargebee/list_subscription?token=" + encodeURIComponent(CONFIG.userToken)+"&siteid=www.theepochtimes.com&bust_cache=true",
        }).done(function () {
            console.log("listSubscription success");
        }).fail(function (error) {
            console.log("listSubscription error", error);
        });
    },
    getFlexibleDateEstimation: async function (endTerm) {
        return $.ajax({
            type: "GET",
            dataType: "json",
            contentType: "application/json",
            url: `https://subsapi.epoch.cloud/chargebee/flexible_billing_date_estimation?subscription_id=${CONFIG.subscription_id}&term_ends_at=${endTerm}`,
        }).done(function () {
            console.log("getFlexibleDateEstimation success");
        }).fail(function (error) {
            console.log("getFlexibleDateEstimation error", error);
        });
    },
    setFlexibleDateEstimation: async function (endTerm) {
        return $.ajax({
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            url: `https://subsapi.epoch.cloud/chargebee/flexible_billing_set_date?token=${encodeURIComponent(CONFIG.userToken)}&subscription_id=${CONFIG.subscription_id}&term_ends_at=${endTerm}`,
        }).done(function () {
            console.log("setFlexibleDateEstimation success");
        }).fail(function (error) {
            console.log("setFlexibleDateEstimation error", error);
        });
    },
    getCardType: async function () {
        return $.ajax({
            type: "GET",
            dataType: "json",
            contentType: "application/json",
            url: `https://subsapi.epoch.cloud/chargebee/get_card_funding_type?token=${encodeURIComponent(CONFIG.userToken)}`,
        }).done(function () {
            console.log("getCardType success");
        }).fail(function (error) {
            console.log("getCardType error", error);
        });
    },
    udpateCustomerName: async function (params) {
        let url = "https://subsapi.epoch.cloud/profile/update_customer";

        if(params.token) {
            url += "?token=" + encodeURIComponent(params.token);
        } else {
            url += "?subscription_id=" + params.subscription_id
        }

        let data = {
            first_name: params.firstName,
            last_name: params.lastName
        }

        return $.ajax({
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            url: url,
            data: JSON.stringify(data)
        }).done(function () {
            console.log("update name success");
        }).fail(function (error) {
            console.log("update name error", error);
        });
    },
    getUserSeats: async function () {
        return  $.ajax({
            type: "GET",
            url: "https://subsapi.epoch.cloud/seats/list?token=" + encodeURIComponent(CONFIG.userToken),
            success: function (res) {
                //  console.log("getUserSeats success!", res);
            },
            error: function (res) {
                console.error("Get seats error!", res);
                throw new Error(res);
            }
        });
    },
    assignFreeSeatToUser: async function (user_email) {
        return  $.ajax({
            type: "POST",
            url: "https://subsapi.epoch.cloud/seats/assign?token=" + encodeURIComponent(CONFIG.userToken) + "&guest_email=" + encodeURIComponent(user_email),
            success: function (res) {
                //  console.log("assignFreeSeatToUser success!", res);
            },
            error: function (res) {
                console.error("assignFreeSeatToUser error!", res);
                throw new Error(res);
            }
        });
    }
}