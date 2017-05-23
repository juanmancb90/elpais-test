<?php 

include 'base.php';

// Patient Model
// Clase del Core
class patient extends base
{
    public function __construct()
    {
        // constructing the parent gives us 
        // access to the db through $this->db
        // which is a native php mysqli interface
        parent::__construct();
    }

    public function list_all()
    {
        $result = parent::create_query('select * from patients');

        return parent::result_array($result);
    }

    public function list_by_age()
    {
        $rst = parent::create_query('select patient_age as age, count(patient_id) as quantity from patients GROUP BY patient_age');

        return parent::result_array($rst);
    }

    public function list_by_age_50()
    {
        $rst = parent::create_query('select * from patients where patient_age > 50');
        return parent::result_array($rst);
    }
}