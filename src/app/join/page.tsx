import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Pulse — Daily Navigational Intelligence · Protocol 33',
  description:
    'Receive daily Vedic navigational intelligence for your nervous system. Free daily broadcast — moon transits, shadow windows, and somatic transmissions.',
}

export default function PulsePage() {
  const SUPABASE_URL = 'https://eerzwpodjhbxwntccpyf.supabase.co'
  const SUPABASE_ANON =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlcnp3cG9kamhieHdudGNjcHlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxMTg2NjIsImV4cCI6MjA4OTY5NDY2Mn0.ouaw1od8I0-_l4RfiDl3nkgypmy9PNdAT12OFB5PfSA'

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Cinzel:wght@400;600;700&display=swap');

        .pulse-body {
          background: #0e051c;
          color: #e4daf8;
          font-family: 'EB Garamond', Georgia, serif;
          min-height: 100vh;
          overflow-x: hidden;
        }
        .pulse-bg-geo {
          position: fixed; inset: 0; z-index: 0;
          background:
            radial-gradient(ellipse 80% 60% at 50% 0%, #2d1a5530 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 80% 80%, #d4af3708 0%, transparent 60%);
          pointer-events: none;
        }
        .pulse-bg-geo::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(#2d1a5526 1px, transparent 1px),
            linear-gradient(90deg, #2d1a5526 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.15;
        }
        .pulse-page { position: relative; z-index: 1; }
        nav.pulse-nav {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 40px;
          border-bottom: 1px solid #d4af3720;
        }
        .pulse-nav-logo {
          font-family: 'Cinzel', serif;
          font-size: 13px; letter-spacing: 3px; color: #d4af37;
          text-decoration: none;
        }
        .pulse-nav-link {
          font-family: 'Cinzel', serif;
          font-size: 11px; letter-spacing: 2px; color: #9b7823;
          text-decoration: none;
        }
        .pulse-nav-link:hover { color: #d4af37; }
        .pulse-hero {
          max-width: 760px; margin: 0 auto;
          padding: 80px 32px 60px; text-align: center;
        }
        .pulse-eyebrow {
          font-family: 'Cinzel', serif;
          font-size: 11px; letter-spacing: 5px; color: #9b7823;
          text-transform: uppercase; margin-bottom: 20px;
        }
        .pulse-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(44px, 8vw, 72px);
          font-weight: 700; color: #d4af37;
          letter-spacing: 6px; line-height: 1.1; margin-bottom: 12px;
        }
        .pulse-subtitle {
          font-family: 'Cinzel', serif;
          font-size: clamp(13px, 2vw, 16px);
          color: #9b7823; letter-spacing: 2px; margin-bottom: 36px;
        }
        .pulse-divider {
          width: 80px; height: 1px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          margin: 0 auto 36px;
        }
        .pulse-hero-body {
          font-size: clamp(18px, 2.5vw, 22px);
          line-height: 1.8; color: #c0b0e0;
          max-width: 600px; margin: 0 auto 48px;
        }
        .pulse-hero-body em { color: #e4daf8; font-style: italic; }
        .pulse-card {
          background: linear-gradient(135deg, #1a0a35 0%, #0e051c 100%);
          border: 1px solid #d4af3730; border-radius: 4px;
          padding: 48px 40px;
          max-width: 480px; margin: 0 auto 80px;
          position: relative;
        }
        .pulse-card::before {
          content: '';
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 60px; height: 2px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
        }
        .pulse-card-label {
          font-family: 'Cinzel', serif;
          font-size: 10px; letter-spacing: 4px; color: #9b7823;
          text-transform: uppercase; margin-bottom: 24px;
          display: block; text-align: center;
        }
        .pulse-form { display: flex; flex-direction: column; gap: 16px; }
        .pulse-input {
          background: #0a0314; border: 1px solid #d4af3740; border-radius: 2px;
          padding: 16px 20px;
          font-family: 'EB Garamond', serif; font-size: 18px; color: #e4daf8;
          outline: none; width: 100%; transition: border-color 0.2s;
        }
        .pulse-input::placeholder { color: #4a3570; }
        .pulse-input:focus { border-color: #d4af37; }
        .pulse-btn {
          background: linear-gradient(135deg, #d4af37 0%, #9b7823 100%);
          color: #0e051c; border: none; border-radius: 2px;
          font-family: 'Cinzel', serif; font-size: 13px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          padding: 18px 32px; cursor: pointer;
          transition: opacity 0.2s, transform 0.1s;
        }
        .pulse-btn:hover { opacity: 0.9; transform: translateY(-1px); }
        .pulse-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
        .pulse-fine {
          font-size: 13px; color: #4a3570;
          text-align: center; margin-top: 8px; line-height: 1.5;
        }
        .pulse-error {
          display: none; background: #3a0a1a; border: 1px solid #8b2040;
          border-radius: 2px; padding: 12px 16px;
          font-size: 15px; color: #f0a0b0; text-align: center;
        }
        .pulse-success { display: none; text-align: center; padding: 20px 0; }
        .pulse-success-icon { font-size: 40px; margin-bottom: 16px; display: block; }
        .pulse-success h3 {
          font-family: 'Cinzel', serif; font-size: 18px; color: #d4af37;
          letter-spacing: 2px; margin-bottom: 12px;
        }
        .pulse-success p { font-size: 17px; color: #c0b0e0; line-height: 1.7; }
        .pulse-delivery-box {
          margin-top: 20px; text-align: left;
          background: #0a0314; border: 1px solid #d4af3730;
          border-radius: 3px; padding: 18px 20px;
        }
        .pulse-delivery-label {
          font-family: 'Cinzel', serif; font-size: 10px;
          letter-spacing: 3px; color: #9b7823;
          text-transform: uppercase; margin-bottom: 12px; display: block;
        }
        .pulse-delivery-steps {
          font-size: 15px; color: #c0b0e0; line-height: 1.7; margin: 0;
        }
        .pulse-features {
          max-width: 760px; margin: 0 auto 80px; padding: 0 32px;
        }
        .pulse-features-title {
          font-family: 'Cinzel', serif; font-size: 11px; letter-spacing: 4px;
          color: #9b7823; text-transform: uppercase;
          text-align: center; margin-bottom: 40px;
        }
        .pulse-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
        }
        .pulse-feature {
          background: #120828; border: 1px solid #d4af3720;
          border-radius: 3px; padding: 28px 24px; text-align: center;
        }
        .pulse-feature-icon { font-size: 28px; margin-bottom: 12px; display: block; }
        .pulse-feature-name {
          font-family: 'Cinzel', serif; font-size: 12px;
          letter-spacing: 2px; color: #d4af37; margin-bottom: 8px;
        }
        .pulse-feature-desc { font-size: 15px; color: #c0b0e0; line-height: 1.6; }
        .pulse-sample { max-width: 480px; margin: 0 auto 80px; padding: 0 32px; text-align: center; }
        .pulse-sample-title {
          font-family: 'Cinzel', serif; font-size: 11px; letter-spacing: 4px;
          color: #9b7823; text-transform: uppercase; margin-bottom: 24px;
        }
        .pulse-quote {
          background: linear-gradient(135deg, #1a0a35 0%, #0e051c 100%);
          border-left: 3px solid #d4af37;
          padding: 28px 32px; text-align: left margin-bottom: 16px;
        }
        .pulse-quote p { font-size: 20px; font-style: italic; color: #e4daf8; line-height: 1.7; margin-bottom: 16px; }
        .pulse-quote .pulse-command { font-family: 'Cinzel', serif; font-size: 13px; color: #d4af37; letter-spacing: 1px; }
        .pulse-sample-date { font-size: 13px; color: #4a3570; }
        footer.pulse-footer {
          border-top: 1px solid #d4af3720; padding: 32px 40px; text-align: center;
        }
        .pulse-footer-logo {
          font-family: 'Cinzel', serif; font-size: 13px;
          letter-spacing: 3px; color: #4a3570; margin-bottom: 8px;
        }
        .pulse-footer-text { font-size: 13px; color: #4a3570; line-height: 1.6; }
        .pulse-footer-text a { color: #4a3570; }
        @media (max-width: 600px) {
          nav.pulse-nav { padding: 16px 20px; }
          .pulse-hero { padding: 60px 20px 40px; }
          .pulse-card { padding: 36px 24px; margin: 0 16px 60px; }
          .pulse-features { padding: 0 20px; }
        }
      `}</style>

      <div className="pulse-body">
        <div className="pulse-bg-geo" />
        <div className="pulse-page">
          <nav className="pulse-nav">
            <a href="https://p33eft.com" className="pulse-nav-logo">PROTOCOL 33</a>
            <a href="https://p33eft.com" className="pulse-nav-link">EFT CLINIC ↗</a>
          </nav>

          <section className="pulse-hero">
            <p className="pulse-eyebrow">Free Daily Broadcast</p>
            <h1 className="pulse-title">THE PULSE</h1>
            <p className="pulse-subtitle">Navigational Intelligence for the Collective Nervous System</p>
            <div className="pulse-divider" />
            <p className="pulse-hero-body">
              Every morning, your nervous system receives a transmission before you even open your eyes.<br /><br />
              <em>The Pulse</em> decodes it — moon transits, Nakshatra energy, global shadow windows, and a somatic command to navigate the day with sovereign precision.
            </p>
          </section>

          <div className="pulse-card" id="signup-card">
            <span className="pulse-card-label">Join the Broadcast</span>
            <div id="form-container">
              <form className="pulse-form" id="signup-form" noValidate>
                <input
                  type="email"
                  className="pulse-input"
                  id="email-input"
                  placeholder="your@email.com"
                  autoComplete="email"
                  required
                />
                <div className="pulse-error" id="signup-error" />
                <button type="submit" className="pulse-btn" id="signup-btn">
                  Begin Receiving The Pulse
                </button>
              </form>
              <p className="pulse-fine">Free. No spam. Unsubscribe anytime.</p>
            </div>
            <div className="pulse-success" id="signup-success">
              <span className="pulse-success-icon">✦</span>
              <h3>You Are In The Broadcast</h3>
              <p>Your first Pulse arrives tomorrow at dawn.</p>
              <div className="pulse-delivery-box">
                <span className="pulse-delivery-label">To ensure delivery</span>
                <p className="pulse-delivery-steps">
                  1. Check your <strong style={{color:'#e4daf8'}}>Junk / Spam folder</strong> for the first email and move it to your inbox.<br /><br />
                  2. Add <strong style={{color:'#d4af37'}}>pulse@mailer.p33eft.com</strong> to your contacts so future transmissions arrive directly.<br /><br />
                  3. On Gmail, drag the email from Promotions to Primary.
                </p>
              </div>
            </div>
          </div>

          <section className="pulse-features">
            <p className="pulse-features-title">What Arrives Each Morning</p>
            <div className="pulse-features-grid">
              <div className="pulse-feature">
                <span className="pulse-feature-icon">🌙</span>
                <p className="pulse-feature-name">Moon Transit</p>
                <p className="pulse-feature-desc">Daily Nakshatra and moon sign intelligence — the energetic weather you are moving through.</p>
              </div>
              <div className="pulse-feature">
                <span className="pulse-feature-icon">⚡</span>
                <p className="pulse-feature-name">Somatic Transmission</p>
                <p className="pulse-feature-desc">A direct body-level reading of the day&apos;s energy and what your nervous system needs to know.</p>
              </div>
              <div className="pulse-feature">
                <span className="pulse-feature-icon">🌍</span>
                <p className="pulse-feature-name">Global Shadow Windows</p>
                <p className="pulse-feature-desc">Rahu Kaal and Yamaganda times for 8 cities worldwide — when to pause, not initiate.</p>
              </div>
              <div className="pulse-feature">
                <span className="pulse-feature-icon">🛡️</span>
                <p className="pulse-feature-name">Sovereign Command</p>
                <p className="pulse-feature-desc">One precise directive for the day. Not advice — a navigational instruction from the field.</p>
              </div>
            </div>
          </section>

          <section className="pulse-sample">
            <p className="pulse-sample-title">A Recent Transmission</p>
            <div className="pulse-quote">
              <p>&ldquo;The cosmos is forcing a confrontation today. It demands to know what you are actually willing to sacrifice to step into Visibility.&rdquo;</p>
              <p className="pulse-command">Today: Make the cut. Stop hiding and start shining.</p>
            </div>
            <p className="pulse-sample-date">Saturday, April 4, 2026 · Vishakha Nakshatra · Saturn&apos;s Day</p>
          </section>

          <footer className="pulse-footer">
            <p className="pulse-footer-logo">PROTOCOL 33 · EFT ONLINE CLINIC</p>
            <p className="pulse-footer-text">
              <a href="https://p33eft.com">www.p33eft.com</a> · Mount Gambier, South Australia<br />
              Trauma-informed somatic regulation for the sovereign builder.
            </p>
          </footer>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          var SUPABASE_URL = '${SUPABASE_URL}';
          var SUPABASE_ANON = '${SUPABASE_ANON}';
          var form = document.getElementById('signup-form');
          var emailIn = document.getElementById('email-input');
          var btn = document.getElementById('signup-btn');
          var errDiv = document.getElementById('signup-error');
          var success = document.getElementById('signup-success');
          var formCont = document.getElementById('form-container');
          if (!form) return;
          form.addEventListener('submit', async function(e) {
            e.preventDefault();
            errDiv.style.display = 'none';
            var email = emailIn.value.trim().toLowerCase();
            if (!email || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
              errDiv.textContent = 'Please enter a valid email address.';
              errDiv.style.display = 'block';
              emailIn.focus(); return;
            }
            btn.disabled = true;
            btn.textContent = 'Joining the Broadcast…';
            try {
              var res = await fetch(SUPABASE_URL + '/rest/v1/subscribers', {
                method: 'POST',
                headers: {
                  'apikey': SUPABASE_ANON,
                  'Authorization': 'Bearer ' + SUPABASE_ANON,
                  'Content-Type': 'application/json',
                  'Prefer': 'return=minimal',
                },
                body: JSON.stringify({ email: email }),
              });
              if (res.status === 201 || res.status === 200 || res.status === 409) {
                formCont.style.display = 'none';
                success.style.display = 'block';
              } else {
                var body = await res.json().catch(function(){return {};});
                if (body.code === '23505') {
                  formCont.style.display = 'none';
                  success.style.display = 'block';
                } else {
                  throw new Error(body.message || 'Error ' + res.status);
                }
              }
            } catch(err) {
              btn.disabled = false;
              btn.textContent = 'Begin Receiving The Pulse';
              errDiv.textContent = 'Something went wrong. Please try again or email peter@p33eft.com';
              errDiv.style.display = 'block';
            }
          });
        })();
      `}} />
    </>
  )
}
