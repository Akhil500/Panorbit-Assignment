function unique_code_submission( $fields ) {
    $uniqueCode = rand(111111111,999999999);

    $index = 0;
    $arrayLength = count($fields); 
    
    while ( 0 <= $index ) {
        ++$index;
        if ( 'mycode_1643051221731' == $fields[ $index-1 ][ 'key' ] ) {
            $fields[ $index-1 ][ 'value' ] = "DEVCON" . $uniqueCode;
            $index = -1;
        }
        if ( $index > $arrayLength ) {
            $index = -1;
        }
    }

    return $fields;
}