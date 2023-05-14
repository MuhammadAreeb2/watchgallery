import { Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material"
import "./footer.css"
import { motion } from "framer-motion";
const Footer = () => {
    return (
      <div className="footer" id="contactus">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-sm-12 left-side">
                
              <p className="footer-hover">
              <h5>Our Story</h5>
              Watch Gallery is a direct-to-consumer brand thus we price our Timepieces at fraction of the similar quality and similar fashion brands.
               we believe in high volumes and less margins. 
               We never compromise on quality, in-fact, 
               Our premium-quality watches are waiting to be discovered.


              </p>
              <table className="mt-4">
                <tr>
                    
                </tr>
           </table>
           
              </div>
              
              </div>
              </div>

              <div className="footer-icons">
          <motion.div whileHover={{ scale: 1.2 }} className="footer-bg">
            <Instagram className="footer-icon" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="footer-bg">
            <Facebook className="footer-icon" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="footer-bg">
            <Twitter className="footer-icon" />
          </motion.div>
          <a href="https://wa.me/+923218259487" style={{ color: "black" }}>
            <motion.div whileHover={{ scale: 1.2 }} className="footer-bg">
              <WhatsApp className="footer-icon" />
            </motion.div>
          </a>
        </div>
        <div className="row">
        <p
          className=" mt-3 pb-3 text-center "
          style={{
            color: "white",
          }}
        >
          © Watch Gallery 2023 - All Right Reserved.<br></br> 
            <span
              className="mx-2"
              style={{
                color: "orange",
                fontWeight: "600",
                textTransform: "uppercase ",
              }}
            >
              Muhammad Areeb
            </span>
          
        </p>
      </div>
    

              </div>
)}
  
export  default Footer