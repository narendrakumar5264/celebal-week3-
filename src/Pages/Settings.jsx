import React from "react";

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Settings</h2>
      
      <div className="space-y-8">
        {/* Profile Settings */}
        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Profile Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="john@example.com"
              />
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input type="checkbox" id="email-notifications" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
              <label htmlFor="email-notifications" className="ml-3 text-sm text-gray-700">
                Email notifications
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="push-notifications" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
              <label htmlFor="push-notifications" className="ml-3 text-sm text-gray-700">
                Push notifications
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="sms-notifications" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
              <label htmlFor="sms-notifications" className="ml-3 text-sm text-gray-700">
                SMS alerts
              </label>
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Privacy Settings</h3>
          <p className="text-gray-600 mb-4">
            Control who can see your activity and how your data is shared. We prioritize your privacy and 
            never sell your information to third parties.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Profile Visibility</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                <option>Public</option>
                <option>Friends Only</option>
                <option>Private</option>
              </select>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="data-sharing" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
              <label htmlFor="data-sharing" className="ml-3 text-sm text-gray-700">
                Allow anonymous data collection to help improve our services
              </label>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div>
          <h3 className="text-xl font-semibold text-red-600 mb-4">Danger Zone</h3>
          <p className="text-gray-600 mb-4">
            These actions are irreversible. Please proceed with caution.
          </p>
          <div className="space-y-4">
            <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition">
              Deactivate Account
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
              Delete Account Permanently
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Note: Account deletion cannot be undone. All your data will be permanently removed.
          </p>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}