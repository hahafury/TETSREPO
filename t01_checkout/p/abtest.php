<?php
session_start();

class ABTest {
    public $assigned_variant;
    public $variants;
    public $testID;
    public $backup_variant;

    public function __construct($page_name, $abtest_config, $backup_variant = 'https://subscribe.theepochtimes.com/p/?page=trial14') {
        $this->testID = $abtest_config[$page_name]['test_name'] . '_' . md5(json_encode($abtest_config[$page_name]));
        $this->variants = $abtest_config[$page_name]['variants'];
        $this->backup_variant = $backup_variant;
    }

    // Load varian from session or decide one
    public function get_variant() {
        if(isset($_SESSION['abtest_'.$this->testID])) {
            $this->assigned_variant = $_SESSION['abtest_'.$this->testID];
        } else {
            $this->assign_variant();
            $_SESSION['abtest_'.$this->testID] = $this->assigned_variant;
        }
        
        return $this->assigned_variant;
    }

    // Decide variant from array
    public function assign_variant() {
        $index = 0;
        $choice = rand(0,99);
        $assigned_variant = false;
        foreach ($this->variants as $variant) {
            $index = $index + $variant[1];
            if ($index > $choice) {
                $this->assigned_variant = $variant[0];
                break;
            }   
        }
    }

    // Redirect to chosent variant - or backup variant if not valid
    public function redirect_to_variant() {
        $destination = ($_SERVER['QUERY_STRING']) ? $this->get_variant().'?'.$_SERVER['QUERY_STRING'] : $this->get_variant();
        if (filter_var($destination, FILTER_VALIDATE_URL)) {
            header("Location: ".$destination);
        } else {
            header("Location: ".$this->backup_variant);
        }
    }
}