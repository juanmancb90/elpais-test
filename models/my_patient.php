<?php 

include './core/patient.php';

// Extended Patient Model
class my_patient extends patient
{
    public function __construct()
    {
        parent::__construct();
    }
}