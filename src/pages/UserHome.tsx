import NavbarConnected from "../components/nav/NavbarConnected";
import Header from "../components/user/Header";
import { Transactions } from "../components/user/Transactions";

const UserHome = () => {
  return (
    <div>
      <NavbarConnected />
      <main className="main bg-dark">
        <Header />
        <h2 className="sr-only">Accounts</h2>
        <Transactions name="Argent Bank Checking (x8349)" amount="$2,082.79"/>
        <Transactions name="Argent Bank Savings (x6712)" amount="$10,928.42"/>
        <Transactions name="Argent Bank Credit Card (x8349)" amount="$184.30"/>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  );
};

export default UserHome;
