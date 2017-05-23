<?php 

class base
{
    public function __construct()
    {
        // grab the DB config settings from a ini file
        // http://php.net/manual/en/function.parse-ini-file.php
        $settings = parse_ini_file('config.php', TRUE);

        // establish connection to DB
        $this->db = new mysqli(
            $settings['DB']['host'],
            $settings['DB']['user'],
            $settings['DB']['pass'],
            $settings['DB']['database']
        );

        // should you handle connection errors?
        // if($this->db->connect_error) { ... }
    }

    protected function create_query($query)
    {
        $sql = $this->db->query($query);
        return $sql;
    }

    protected function result_array( $result )
    {
        while($record = $result->fetch_object())
        {
            $result_array[] = $record;
        }

        return $result_array;
    }


    public function __destruct()
    {
        $this->db->close();
    }

}