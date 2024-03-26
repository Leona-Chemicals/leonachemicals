import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main id="top" className={styles.main}>
      <div className={styles.navbar}>
        <div className={styles.navbarItem}>Home</div>
        <div className={styles.navbarItem}>Products</div>
        <div className={styles.navbarItem}>Contact</div>
      </div>

      {/* Company name, intro */}
      <div className={styles.titleDiv}>
        <div className={styles.bgLogoDiv}>
          <Image src={"/logo.png"} fill={true} className={styles.bgLogo} />
        </div>
        <div className={styles.titleInnerDiv}>
          <p className={styles.titleText}>
            <span className={styles.titleLetter}>L</span>
            <span className={styles.titleLetter}>e</span>
            <span className={styles.titleLetter}>o</span>
            <span className={styles.titleLetter}>n</span>
            <span className={styles.titleLetter}>a</span>
            <span className={styles.titleLetter}> </span>
            <span className={styles.titleLetter}>C</span>
            <span className={styles.titleLetter}>h</span>
            <span className={styles.titleLetter}>e</span>
            <span className={styles.titleLetter}>m</span>
            <span className={styles.titleLetter}>i</span>
            <span className={styles.titleLetter}>c</span>
            <span className={styles.titleLetter}>a</span>
            <span className={styles.titleLetter}>l</span>
            <span className={styles.titleLetter}>s</span>
          </p>
          <p className={styles.titleSubtext}>
            <span className={styles.titleSubtextWord}>Indenting </span>
            <span className={styles.titleSubtextWord}>Company </span>
            <span className={styles.titleSubtextWord}>& </span>
            <span className={styles.titleSubtextWord}>Sourcing </span>
            <span className={styles.titleSubtextWord}>Agent </span>
          </p>
        </div>
      </div>

      {/* Description, search for products */}
      <div id="description" className={styles.descriptionDiv}>
        <div className={styles.descriptionSubDiv}>
          <p className={styles.descriptionText}>
            We're here to take care of your requirements for
            <span className={styles.descriptionSpecialText}>
              {" "}
              raw materials, fine chemicals & intermediates
            </span>{" "}
            for
            <span className={styles.descriptionSpecialText}>
              {" "}
              Pharma, Agro, Paint, Aromatic & Cosmetic Industries.
            </span>
            <br />
            We handle the entire hassle for your procurement.
          </p>
        </div>
        <div className={styles.productSearchDiv}>
          <p className={styles.productSearchSubDiv}>
            View our complete list of products{" "}
            <Link className={styles.productLink} href={"/products"}>
              here...
            </Link>{" "}
            <br />
          </p>
          <div className={styles.productSearchSubDiv}>
            <input
              placeholder="or search for a product..."
              className={styles.productSearchInput}
            />
          </div>
        </div>
      </div>

      {/* Description, search for products */}
      <div id="contact" className={styles.descriptionDiv}>
        <div className={styles.contactSubDiv}>
          <div className={styles.boxBorder}>
            <p className={styles.descriptionText}>
              For your import requirements or in case of any further queries,
              send us an email - {" "}
              <span className={styles.descriptionSpecialText}>
                sales@leonachemicals.com
              </span>{" "}
              <br />
              or give us a call... <br />
              <span className={styles.descriptionSpecialText}>
                +91&nbsp;9930336966 +91&nbsp;9137794481
              </span>
            </p>
          </div>
          <br />
          <br />
          <br />
          <div
            className={styles.descriptionText}
            style={{ backgroundColor: "#2e2e2e", color: "#fff" }}
          >
            <h2>Business Hours</h2>
            <p>Monday to Friday - 10:00 a.m. - 06:00 p.m.</p>
            <p>Saturday - 10:00 a.m. - 02:00 p.m.</p>
            <p>Sunday - Closed</p>
          </div>
        </div>
        <div className={styles.productSearchDiv}>
          <div style={{ paddingTop: "20px" }}>
            <p style={{ paddingBottom: "20px" }}>Based in Mumbai, India</p>
            <iframe
              className={styles.mapDiv}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235937.81450869635!2d72.71935557269366!3d19.08490871466794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711367093975!5m2!1sen!2sin"
              width="500"
              height="350"
              allowfullscreen=""
              style={{ borderRadius: "8px" }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div id="careers" className={styles.descriptionText} style={{textAlign: "center", padding: "20px"}}>
        <h2>Want to work with us?</h2><br />
        <p>Looking for candidates with minimum 1 year experience in the field and basic industry knowledge.
Send us an email at <br />
<span className={styles.descriptionSpecialText}>
leonachemicals@gmail.com</span></p>
      </div>

      {/* footer */}
      <div className={styles.footer}>
        <p>
          <Link className={styles.footerLink} href={"/#top"}>Home</Link>{" | "}
          <Link className={styles.footerLink} href={"/#description"}>Products</Link>{" | "}
          <Link className={styles.footerLink}  href={"/#contact"}>Contact Information</Link>{" | "}
          <Link className={styles.footerLink} href={"/#careers"}>Careers</Link>
        </p>
        <p>Copyright © Leona Chemicals 2024</p>
        <p>Developed by Keane Pereira</p>
      </div>
    </main>
  );
}
