Here is a **README.md** file for the Warehouse Management App with clear instructions on how to install, run, and understand the project:

---

# **Warehouse Management App**

A React Native app for managing warehouse inventory with role-based access control for Managers and Staff. It includes features like item addition, deletion, searching with optimized UI/UX.

## **Features**

- **Authentication**: Role-based login (Manager or Staff).
- **Inventory Management**: View, search, and filter inventory items.
  - Managers can add, edit, and delete items.
  - Staff can only view items & update Item Quantity.
- **Error Handling**: Form validation with real-time error messages.
- **Optimized UI/UX**: Responsive design with improved FlatList, search, and input fields.

---
## **Login Credentials**
- Manager : username: user, password: password
- Staff : username: staff, password: password

## **Screens**

- **Login Screen**: Users can log in as either a Manager or Staff.
- **Inventory Screen**: View, search, and filter warehouse inventory.
- **Item Detail Screen**: Detailed view of an item. Managers can delete items.
- **Add Item Screen**: Only accessible by Managers to add new items to the inventory.

---

## **Installation Instructions**

### **Prerequisites**

- **Node.js** and **npm** installed on your machine.
- **React Native CLI** installed.
- **Android Studio** (for Android development) or **Xcode** (for iOS development).

### **Clone the Repository**

```bash
git clone https://github.com/nadimahamad/Warehouse-Management-System-Assignment-By-APAC.git
```

### **Install Dependencies**

After cloning the repository, run the following command to install all dependencies:

```bash
npm install
```

### **Link Dependencies**

If you're running on iOS, you need to install pods:

```bash
cd ios
pod install
cd ..
```

---

## **Running the App**

### **For Android:**

Ensure you have an Android emulator running, or connect a real Android device.

```bash
npx react-native run-android
```

### **For iOS:**

Ensure you have Xcode installed and an iOS simulator running, or connect a real iOS device.

```bash
npx react-native run-ios
```

### **Run the Metro Bundler**

In a separate terminal window, you can start the Metro Bundler by running:

```bash
npx react-native start
```

---

## **Usage**

### **Login Screen**

- **Manager**: Use the username `user` and password `password`.
- **Staff**: Use the username `staff` and password `password`.

### **Theme Toggling**

- You can toggle between **dark** and **light** themes on the login screen and throughout the app by pressing the **Toggle Theme** button.

### **Managing Inventory**

- Managers can add new items via the "Add New Item" button on the Inventory screen.
- Both Managers and Staff can search for items using the search bar at the top of the Inventory screen.
- Clicking on an item shows its details, and Managers can delete items from this screen.

---

## **Project Structure**

```
WarehouseApp/
├── src/
│   ├── navigation/             # Navigation logic
│   ├── screens/                # All app screens (Login, Inventory, etc.)
│   ├── redux/                  # Redux setup and slices
│   └── utils/                  # Utility functions (e.g., validation)
├── App.js                      # Main entry point
├── package.json                # Project dependencies
└── README.md                   # This README file
```

### **Key Files**

- **App.js**: Main application setup including Redux and Theme provider.
- **src/navigation/AppNavigator.js**: Manages navigation between screens.
- **src/screens/**: Contains the UI logic for each screen (Login, Inventory, etc.).
- **src/redux/**: Redux slices for managing app state (e.g., authentication, inventory).

---

## **Technologies Used**

- **React Native**: Framework for building cross-platform mobile apps.
- **Redux Toolkit**: For state management.
- **Formik & Yup**: For form handling and validation.
- **React Navigation**: For navigation between screens.
- **Animated API**: Used for smooth transitions

---

## **Contributing**

Feel free to submit issues or pull requests if you'd like to contribute to the project.

---

## **Author**

- **Your Name** - [GitHub Profile](https://github.com/nadimahamad)

---

With this README file, you now have clear instructions on how to install, run, and contribute to the project!



This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
