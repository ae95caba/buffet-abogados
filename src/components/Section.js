import React from "react"

export default function Section({ className, children, id }) {
  return (
    <section className={className} id={id}>
      <div className="content">{children}</div>
    </section>
  )
}
