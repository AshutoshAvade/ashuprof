import MailChimpSuscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <>
            <MailChimpSuscribe
                url={postUrl}
                render={({ subscribe, status , mesage}) =>(
                    <Newsletter
                        status={status}
                        message={mesage}
                        onValidated={formData => subscribe(formData )}
                    />
            )}
            />
        </>
    )
}