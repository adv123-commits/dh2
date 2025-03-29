'use client'

export default function Map() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.838570729456!2d55.2707!3d25.0333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682aafd164a1%3A0x39dba7a5593f81fb!2sDamac%20Hills%202!5e0!3m2!1sen!2sae!4v1709654321!5m2!1sen!2sae"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      />
    </div>
  )
} 