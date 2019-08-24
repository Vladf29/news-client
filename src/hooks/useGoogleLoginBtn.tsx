import { useEffect, useRef, MutableRefObject } from "react";

const useGoogleLoginBtn = (
  onSuccess: Function,
  onFailure: Function
): MutableRefObject<null> => {
  const refGoogleBtn = useRef(null);

  useEffect(() => {
    const { gapi }: any = window;

    gapi.load("auth2", async () => {
      try {
        if (!gapi.auth2.getAuthInstance())
          await gapi.auth2.init({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
          });

        gapi.signin2.render(refGoogleBtn.current, {
          scope: "email",
          width: 225,
          height: 42,
          longtitle: true,
          theme: "dark",
          onsuccess: onSuccess,
          onfailure: onFailure
        });
      } catch (err) {
        console.log(err);
      }
    });
  }, []);

  return refGoogleBtn;
};

export default useGoogleLoginBtn;
