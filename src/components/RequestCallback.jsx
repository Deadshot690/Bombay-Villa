import { MdLocalPhone } from "react-icons/md";
import Button from "./Button";
import Container from "./Container";

function RequestCallback() {
  return (
    <div className="py-[100px] text-white">
      <Container>
        <div className="flex items-center justify-between gap-[20px] md:flex-row flex-col">
          <div className="md:w-[50%] w-full flex items-center gap-6 md:flex-row flex-col md:text-left text-center">
            <div className="w-14 h-14 flex items-center justify-center bg-primary rounded-lg flex-shrink-0">
              <MdLocalPhone className="text-[#141414] text-3xl" />
            </div>
            <div>
              <h2 className="text-2xl uppercase font-bold mb-[10px]">
                Contact Our Team
              </h2>
              <p className="text-gray">
                Reach out to our team directly for any inquiries or assistance. We are ready to help you with your real estate needs and provide all the information you require.
              </p>
            </div>
          </div>
          <div>
            <a href="tel:+919730877806">
              <Button>Speak With Our Team</Button>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default RequestCallback;
