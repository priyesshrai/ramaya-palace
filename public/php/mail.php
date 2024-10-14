<?php
header('Access-Control-Allow-Origin: *');

if(isset($_REQUEST['action'])) {
    $act = $_REQUEST['action'];
} else if(isset($_POST['action'])) {
    $act = $_POST['action'];
}

switch ($act) {
    case 'booking_form':
        $booking_name = $_POST['booking_name'];
        $booking_email = $_POST['booking_email'];
        $booking_phone = $_POST['booking_phone'];
        $booking_person = $_POST['booking_person'];
        $booking_checkin = $_POST['booking_checkin'];
        $booking_checkout = $_POST['booking_checkout'];

        $booking_confirmation_msg = '
        <div style="margin: 0; padding: 0 !important; color: rgba(0,0,0,.4); line-height: 1.8; font-family: "Playfair Display", serif; font-weight: 400; font-size: 15px;">
            <center style="width: 100%; background-color: #f1f1f1;">
                <div style="max-width: 600px; margin: 0 auto;" class="email-container">
                    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                        <tr>
                            <td style="background: #ffffff; padding: 0em 2.5em; text-align: center; background-color: #0e1029;">
                                <img src="https://ramaypalace.com/images/Hotel Ramaya Palace Logo_.png" style="width: 20%; padding-top: 15px;">
                            </td>
                        </tr>
                        <tr>
                            <td style="text-align:center; background-color: #0d1122; color: #ffffff;">
                                <h2 style="color: #ffffff; font-size: 20px; margin-top: -5px; font-family: oswald,sans-serif;">
                                    Hotel Ramay Palace Booking Enquiry
                                </h2>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 20px; width: 100%; background: #ffffff; text-align: left; color: #557e00;">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <th style="width: 30%;"> Name</th>
                                        <td style="width: 70%;">' . $booking_name . '</td>
                                    </tr>
                                    <tr>
                                        <th>Email :</th>
                                        <td>' . $booking_email . '</td>
                                    </tr>
                                    <tr>
                                        <th>Phone :</th>
                                        <td>' . $booking_phone . '</td>
                                    </tr>
                                    <tr>
                                        <th>Number of Persons :</th>
                                        <td>' . $booking_person . '</td>
                                    </tr>
                                    <tr>
                                        <th>Check-in Date :</th>
                                        <td>' . $booking_checkin . '</td>
                                    </tr>
                                    <tr>
                                        <th>Check-out Date :</th>
                                        <td>' . $booking_checkout . '</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                        <tr>
                            <td valign="middle" style="background-color: #0e1029; color: #fff; padding: 1.1em;">
                                <table>
                                    <tr>
                                        <td valign="top" width="33.333%" style="padding-top: 20px;">
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                <tr>
                                                    <td style="text-align: center; padding-right: 10px; font-family: oswald,sans-serif;">
                                                        <p><strong style="font-size:20px; color: #fff; line-height: 30px;">Contact Details </strong></p>
                                                        Email : 
                                                        <a style="color:#557e00; text-decoration: none;" href="mailto:info@ramaypalace.com" target="_blank" rel="noreferrer">info@ramaypalace.com</a>
                                                        <br>
                                                        Contact : +91 9651000333
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        </center>
        </div>';

        $subject = "Hotel Ramay Palace Booking - " . $booking_name;
        $to = "info@ramaypalace.com";
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=iso-8859-1';
        $headers[] = 'From: Hotel Ramay Palace <info@ramaypalace.com>';

        // Sending the email
        $mail = mail($to, $subject, $booking_confirmation_msg, implode("\r\n", $headers));
        $mail_to_akshat = mail('akshat.gd@gmail.com', $subject, $booking_confirmation_msg, implode("\r\n", $headers));

        // Sending response back to AJAX
        if($mail) {
            $response = 1;
            echo json_encode($response);
        } else {
            $response = 0;
            echo json_encode($response);
        }
        break;
    default:
        $msg = "Something went wrong!";
        echo json_encode($msg);
        break;
}

unset($_REQUEST);
unset($_POST);
?>
