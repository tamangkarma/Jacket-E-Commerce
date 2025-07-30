import InputField from "../../inputField";

const AccountDetailsForm = () => {
  return (
    <form className="max-w-2xl mx-auto p-6 space-y-10">
      {/* Account Details Section */}
      <div>
        <h2 className="text-text10 mb-4">Account Details</h2>

        <div className="space-y-4">
          <InputField
            id="firstName"
            label="First Name"
            placeholder="First name"
            required
          />
          <InputField
            id="lastName"
            label="Last Name"
            placeholder="Last name"
            required
          />
          <InputField
            id="displayName"
            label="Display Name"
            placeholder="Display name"
            required
            helperText="This will be how your name will be displayed in the account section and in reviews"
          />
          <InputField
            id="email"
            type="email"
            label="Email"
            placeholder="Email"
            required
          />
        </div>
      </div>

      {/* Password Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Password</h2>

        <div className="space-y-4">
          <InputField
            id="oldPassword"
            type="password"
            label="Old Password"
            placeholder="Old password"
          />
          <InputField
            id="newPassword"
            type="password"
            label="New Password"
            placeholder="New password"
          />
          <InputField
            id="repeatPassword"
            type="password"
            label="Repeat New Password"
            placeholder="Repeat new password"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Save changes
        </button>
      </div>
    </form>
  );
};

export default AccountDetailsForm;
