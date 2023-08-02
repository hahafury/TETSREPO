<?php

function generate_page_head($page_config) {
    $head = '';

    if($page_config['real_url']) {
        $head .= '<meta name="page:real_page" content="' . $page_config['name'] . '" />';
    }

    if($page_config['abtest'] != false) {
        $head .= '<meta name="page:abtest_id" content="' . $page_config['abtest']->testID . '">';
    }

    // Add Impact script
    $head .= "<script type='text/javascript'> (function(a,b,c,d,e,f,g){e['ire_o']=c;e[c]=e[c]||function(){(e[c].a=e[c].a||[]).push(arguments)};f=d.createElement(b);g=d.getElementsByTagName(b)[0];f.async=1;f.src=a;g.parentNode.insertBefore(f,g);})('//d.impactradius-event.com/A1808333-1bb8-439e-8ce6-e74079c7ebd31.js','script','ire',document,window);</script>";
    $head .= '<script>' . file_get_contents(__DIR__."/head_scripts.js") . '</script>';

    return $head;
}


function render_instapage_proxypage($instapage_url, $page_config, $custom_head_script = "") {

    $insta_source = file_get_contents($instapage_url);
    $adjusted_source = substr_replace($insta_source, generate_page_head($page_config), strpos($insta_source, '</head>'), 0);
    $adjusted_source = substr_replace($adjusted_source, $custom_head_script, strpos($adjusted_source, '</head>'), 0);
    
    return $adjusted_source;
}


function get_ip_address() {
    error_reporting(0); 
    $ipaddress = '';
    if ($_SERVER['HTTP_CLIENT_IP'])
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if($_SERVER['HTTP_X_FORWARDED_FOR'])
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if($_SERVER['HTTP_X_FORWARDED'])
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if($_SERVER['HTTP_FORWARDED_FOR'])
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if($_SERVER['HTTP_FORWARDED'])
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if($_SERVER['REMOTE_ADDR'])
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
 
    return $ipaddress;
}
