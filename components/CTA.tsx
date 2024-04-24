import Link from "next/link";
import React from "react";

function CTA() {
  return (
    <section className="cta">
      <p className="cta-text">
        Have Project in mind <br className="sm:block hidden" /> Let's Build
        Something Together!{" "}
      </p>

      <Link href="/contact" className="btn">
        Let's talk
      </Link>
    </section>
  );
}

export default CTA;
