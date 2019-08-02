<?php
 if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
        header('Access-Control-Allow-Headers: token, Content-Type');
        header('Access-Control-Max-Age: 1728000');
        header('Content-Length: 0');
        header('Content-Type: text/plain');
        die();
    }

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

	$conn = mysqli_connect("localhost","root","","vs");

	// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
	
	if($_POST){
		$params = json_decode(file_get_contents('php://input'), true);
		$ruleName = $params['newRule'];
		
		$sql = "INSERT INTO `rules`(`id`, `ruleName`, `created_date`, `modified_date`) VALUES('','$ruleName','','')";
		if (mysqli_query($conn, $sql)) {
			$sql1 = "SELECT * FROM rules";
			$result = mysqli_query($conn, $sql1);

			if (mysqli_num_rows($result) > 0) {
				$arr = array();
				while($row = mysqli_fetch_assoc($result)) {
					$arr[] = $row['ruleName'];
				}
				echo json_encode($arr);
			} else {
				echo "0 results";
			}
		} else {
			echo "0 results";
		}
	}else{
	$msg = "0 results";
	$sql = "SELECT * FROM rules";
	$result = mysqli_query($conn, $sql);

	if (mysqli_num_rows($result) > 0) {
		$arr = array();
		while($row = mysqli_fetch_assoc($result)) {
			$arr[] = $row['ruleName'];
		}
		echo json_encode($arr);
	} else {
		echo "0 results";
	}
}
?>