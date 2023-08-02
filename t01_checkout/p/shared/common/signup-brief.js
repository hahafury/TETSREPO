// Sometimes we want to override URL that is sent to tracking because of the AB test
real_url = window.location.pathname + window.location.search;
if($('meta[name="page:real_page"]').length > 0) {
    var real_page = $('meta[name="page:real_page"]').attr('content');
    var real_url = real_url.replace('page='+getAllUrlParams().page, 'page='+real_page);
    console.log('real URL set: ' + real_url);
}

// Google Analytics 
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-72468956-16', 'auto');

if($('meta[name="page:abtest_id"]').length > 0) {
    ga('set', 'dimension14', $('meta[name="page:abtest_id"]').attr('content'));
}

ga('send', 'pageview', real_url);


// FB Pixel
!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2225277397802170');
fbq('track', 'PageView');


$(document).ready(function () {


    $.fn.extend({
        animateCss: function(animationName, callback) {
            var animationEnd = (function(el) {
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                return animations[t];
                }
            }
            })(document.createElement('div'));

            this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);

            if (typeof callback === 'function') callback();
            });

            return this;
        },
    });


    // We want to prepar newsletter sign up attributes 

    // Load basic attributes from meta tags
    var mc_list_id = $('meta[name="newsletter:list_id"]').attr('content');
    var mc_groups = $('meta[name="newsletter:groups"]').attr('content');
    var mc_tags = $('meta[name="newsletter:tags"]').attr('content');
    var verification_template = $('meta[name="newsletter:verification_template"]').attr('content');
    var verification_subject = $('meta[name="newsletter:verification_subject"]').attr('content');
    var verification_from_email = $('meta[name="newsletter:verification_from_email"]').attr('content');



    // MC Tags could be based on URL parameters
    var source = getAllUrlParams().utm_source;
    var medium = getAllUrlParams().utm_medium;

    var tags = '';
    tags = tags + '385'; // epochnewsletter_com

    if (source == 'twitter' && medium == 'social-paid') {
        tags = tags + ',313'; // twitter_ads
    }


    $('#subs-form').submit(function () {

        var email = $('#email-input').val()

        ga('send', 'event', 'CTA Click', 'Subscribe Button Click', email);

        $('#subModal').modal();
        

        var real_url = window.location.pathname + window.location.search;
        if($('meta[name="page:real_page"]').length > 0) {
            var real_page = $('meta[name="page:real_page"]').attr('content');
            real_url = real_url.replace('page='+getAllUrlParams().page, 'page='+real_page);
            console.log('real URL set: ' + real_url);
        }

        var subscription_setttings = {
            email: email,
            list_id: mc_list_id,
            tags: mc_tags,
            groups: mc_groups,
            mc_template: verification_template,
            from_email: verification_from_email,
            subject: verification_subject,
            utm_source: real_url,
            utm_campaign: getAllUrlParams().utm_campaign,
            utm_medium: getAllUrlParams().utm_medium,
            utm_term: getAllUrlParams().utm_term,
            callback_success: function () {
                try {
                    fbq('track', 'Sign-Up', {
                        value: 2,
                        currency: '$',
                    });
                } catch (e) {
                    console.log(e)
                }

                ga('send', 'event', 'Conversion', 'Email Subscription 1st step', getAllUrlParams().page);
                switch_modal();
            }    
        }

        signup_2step_email_subscription(subscription_setttings);


        return false;
    })

    send_ping_ga_track_event();

});

load_time = (new Date().getTime()) / 1000; // convert milliseconds to seconds.
function send_ping_ga_track_event() {
    ga('send', 'event', 'Ping', 'Ping', 'Ping');

    var currentTime = (new Date().getTime()) / 1000;
    if (currentTime - load_time <= 300) {
        setTimeout(send_ping_ga_track_event, 5000);
    }
}

function switch_modal() {
    $('.modal-loader').animateCss('fadeOut', function () {
        $('.modal-loader').addClass('d-none');
        $('.modal-done').animateCss('fadeIn').removeClass('d-none');
    })
}

