<?php

$url_data = explode('--', $_GET['page']);
$page_name = $url_data[0];

require_once('./abtest.php');
require_once('./abtest_config.php');

// If requested page doesnt exists, nor AB test for that url is not defined - use default page
if(!(file_exists('./static/'.$page_name.'/index.php') || file_exists('./static/'.$page_name.'/index.html'))  && !array_key_exists($page_name, $abtest_config)) {
    $page_name = 'subhome';
}

include('./shared/common/common.php');

// Load settings default
include('./shared/default_config.php');

// EXECUTE AB TEST IF DEFINED
if (array_key_exists($page_name, $abtest_config)) {
    $abtest = new ABTest($page_name, $abtest_config);
    $page_name = $abtest->get_variant();
    $page_config['abtest'] = $abtest;
}

// Load page specific settings
if(file_exists('./static/'.$page_name.'/config.php')) {
    include('./static/'.$page_name.'/config.php');
}

// Do we allow cache for page?
if($page_config['cache']) {
    $seconds_to_cache = 3600;
    $ts = gmdate("D, d M Y H:i:s", time() + $seconds_to_cache) . " GMT";
    header("Expires: $ts");
    header("Pragma: cache");
    header("Cache-Control: max-age=$seconds_to_cache");
} else {
    header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");
}


$page_config['name'] = $page_name;


ob_start();

if(file_exists('./static/'.$page_name.'/index.php')) {
    include_once('./static/'.$page_name.'/index.php');
} else if (file_exists('./static/'.$page_name.'/index.html')) {
    include_once('./static/'.$page_name.'/index.html');
}

$content_source = ob_get_contents();
ob_end_clean();


$final_source = $content_source;

// Insert HEAD scripts
$head_scripts_source = '';
foreach($page_config['head_scripts'] as $script) {
    $head_scripts_source .= file_get_contents('./pages/snippets/'.$script.'.html');
}
$final_source = substr_replace($final_source, $head_scripts_source, strpos($final_source, '<head>') + 6, 0);


// Insert BOTTOM scripts
$bottom_scripts_source = '';
foreach($page_config['bottom_scripts'] as $script) {
    $bottom_scripts_source .= file_get_contents('./pages/snippets/'.$script.'.html');
}
$final_source = substr_replace($final_source, $bottom_scripts_source, strpos($final_source, '</body>') + 7, 0);


print $final_source;


