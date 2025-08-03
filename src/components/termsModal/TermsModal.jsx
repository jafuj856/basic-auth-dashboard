import { Modal } from "@mui/material";
import React from "react";

function TermsModal({ onClose, isOpen }) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      className="flex items-center justify-center p-4 overflow-y-auto "
    >
      <div className="w-full max-w-[550px] bg-white rounded-md p-4 md:p-6 outline-none mt-20 md:mt-36">
        <h1 className="font-semibold text-[1.75rem] text-gray-900 mb-6">
          Terms & Conditions
        </h1>

        <div className="space-y-4">
          <p className="text-[0.9rem] text-gray-700 leading-relaxed">
            These are the Terms and Conditions governing the use of this Service
            and the agreement that operates between You and the Company. These
            Terms and Conditions set out the rights and obligations of all users
            regarding the use of the Service.
          </p>

          <p className="text-[0.9rem] text-gray-700 leading-relaxed">
            Your access to and use of the Service is conditioned on Your
            acceptance of and compliance with these Terms and Conditions. These
            Terms and Conditions apply to all visitors, users and others who
            access or use the Service.
          </p>

          <p className="text-[0.9rem] text-gray-700 leading-relaxed">
            By accessing or using the Service You agree to be bound by these
            Terms and Conditions. If You disagree with any part of these Terms
            and Conditions then You may not access the Service.
          </p>

          <p className="text-[0.9rem] text-gray-700 leading-relaxed">
            You represent that you are over the age of 18. The Company does not
            permit those under 18 to use the Service.
          </p>

          <p className="text-[0.9rem] text-gray-700 leading-relaxed">
            Your access to and use of the Service is also conditioned on Your
            acceptance of and compliance with the Privacy Policy of the Company.
            Our Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your personal information when You
            use the Application or the Website and tells You about Your privacy
            rights and how the law protects You. Please read Our Privacy Policy
            carefully before using Our Service.
          </p>
        </div>
        <button
          onClick={onClose}
          className="bg-gray-900 text-white px-8 py-2 rounded-lg font-medium text-[1rem] hover:bg-gray-800 transition-colors min-w-[100px] mt-4"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

export default TermsModal;
