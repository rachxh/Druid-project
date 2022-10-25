import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../UI/BackButton/BackButton";
import classes from "./ProjectDetails.module.css";

const ProjectDetails = ({
  engine = "-",
  version = "-",
  php = "-",
  js = "-",
  node = "-",
  drush = "-",
  omen = "-",
  mails = "-",
  search = "-",
  cdn = "-",
  infra = "-",
  docker = "-",
  hosting = "-",
  deps = "-",
  ci = "-",
  devmain = "-",
  datacenter = "-",
  country = "-",
  servermaintenance = "-",
  vpn = "-",
  backups = "-",
  sla = "-",
  devs = "-",
  team = "-",
  comments = "-",
  contract = "-",
}) => {
  engine = "Drupal";
  version = "-";
  php = 5.4;
  drush = 8;
  node = 5;
  mails = "sendgrid";
  infra = "ansible";
  hosting = "Custom";
  datacenter = "Cybercom";
  country = "FI";
  servermaintenance = "Druid/Cybercom";
  vpn = "???";
  backups = "Cybercom";
  devs = ["Pasi", "Joni", "Sabrina", "Simo", "Tuomas"];
  comments = "Made by: Jaspe. Palvelimen softaoäivitykset Druid, valvonta";
  return (
    <>
      <BackButton />
      <h2>Project Details</h2>
      <h3>Customer name 1</h3>
      <div className={classes.container}>
        <div className={classes.card}>
          <h3>Service</h3>
          <p>
            <Link to="/madeupsite">service.customer.com</Link>
          </p>
        </div>
        <div className={classes.card}>
          <h3>Engine</h3>
          <p>{engine}</p>
        </div>
        <div className={classes.card}>
          <h3>Version</h3>
          <p>{version}</p>
        </div>

        <div className={php < 6 ? `${classes.cardwarning}` : `${classes.card}`}>
          <h3>PHP</h3>
          <p>{php}</p>
        </div>
        <div className={classes.card}>
          <h3>JS</h3>
          <p>{js}</p>
        </div>
        <div className={node < 9 ? `${classes.cardcaut} ` : `${classes.card}`}>
          <h3>Node</h3>
          <p>{node}</p>
        </div>
        <div className={classes.card}>
          <h3>Drush</h3>
          <p>{drush}</p>
        </div>
        <div className={classes.card}>
          <h3>Omen</h3>
          <p>{omen}</p>
        </div>
        <div className={classes.card}>
          <h3>Mails</h3>
          <p>{mails}</p>
        </div>
        <div className={classes.card}>
          <h3>Search</h3>
          <p>{search}</p>
        </div>
        <div className={classes.card}>
          <h3>CDN</h3>
          <p>{cdn}</p>
        </div>
        <div className={classes.card}>
          <h3>Infra</h3>
          <p>{infra}</p>
        </div>
        <div className={classes.card}>
          <h3>Docker</h3>
          <p>{docker}</p>
        </div>
        <div className={classes.card}>
          <h3>Hosting</h3>
          <p>{hosting}</p>
        </div>
        <div className={classes.card}>
          <h3>Deps</h3>
          <p>{deps}</p>
        </div>
        <div className={classes.card}>
          <h3>CI</h3>
          <p>{ci}</p>
        </div>
        <div className={classes.card}>
          <h3>dev & main</h3>
          <p>{devmain}</p>
        </div>
        <div className={classes.card}>
          <h3>Datacenter</h3>
          <p>{datacenter}</p>
        </div>
        <div className={classes.card}>
          <h3>Country</h3>
          <p>{country}</p>
        </div>
        <div className={classes.card}>
          <h3>Server maint.</h3>
          <p>{servermaintenance}</p>
        </div>
        <div className={classes.card}>
          <h3>VPN</h3>
          <p>{vpn}</p>
        </div>
        <div className={classes.card}>
          <h3>Backups</h3>
          <p>{backups}</p>
        </div>
        <div className={classes.card}>
          <h3>SLA</h3>
          <p>{sla}</p>
        </div>
        <div className={classes.card}>
          <h3>Designated Devs</h3>
          <p>{devs}</p>
        </div>
        <div className={classes.card}>
          <h3>Team</h3>
          <p>{team}</p>
        </div>
        <div className={classes.card}>
          <h3>Comments</h3>
          <p>{comments}</p>
        </div>
        <div className={classes.card}>
          <h3>Contract</h3>
          <p>{contract}</p>
        </div>
      </div>
      <Link to="ticket/1">Create ticket</Link>
    </>
  );
};

export default ProjectDetails;
