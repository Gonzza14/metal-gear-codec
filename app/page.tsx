'use client';

import CodecPlayer from './CodecPlayer';
import { useRef } from 'react';

const DIALOGUES = [
  '<strong>Raiden:</strong> Pliskin, I saw someone wearing a cardboard box just now...?',
  '<strong>Pliskin:</strong> A box? I don&rsquo;t know anything about that. You sure you weren&rsquo;t imagining things?',
  '<strong>Raiden:</strong> Of course I&rsquo;m sure. Do you think it&rsquo;s one of the members of Dead Cell?',
  '<strong>Pliskin:</strong> How should I know?',
  '<strong>Raiden:</strong> I don&rsquo;t want to fight someone like that...',
  '<strong>Pliskin:</strong> Why not?',
  '<strong>Raiden:</strong> Because it looked so dumb. Anyone who&rsquo;s willing to be seen like that must be completely insane. I mean, he&rsquo;s a psycho; there&rsquo;s no question about it.',
];

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <CodecPlayer dialogues={DIALOGUES} />
      </div>

      <div id="notes" style={{ marginTop: '2rem' }}>
        <small style={{ display: 'block', marginBottom: '1rem' }}>
          ↑ click to advance dialogue.
        </small>

        <h4>Snake? Snake? Snaaaaaake!?</h4>
        
        <p>
          Feel free to drop in your own images or customize to your liking. Default options:
        </p>

        <ol>
          <li>
            <strong>dialogues</strong>: Array of strings containing the dialogue lines to display.
          </li>
          <li>
            <strong>leftImage</strong>: URL of the image to display on the left side (optional, defaults
            to placeholder).
          </li>
          <li>
            <strong>rightImage</strong>: URL of the image to display on the right side (optional, defaults
            to placeholder).
          </li>
        </ol>

        <p>
          <strong>Using the CodecPlayer component:</strong>
        </p>

        <p>
          Import the component and pass the dialogues array along with optional image URLs:
        </p>

        <code style={{ display: 'block', padding: '1rem', marginTop: '0.5rem', overflow: 'auto' }}>
          &lt;CodecPlayer <br />
          &nbsp;&nbsp;dialogues={'{[...dialogues]'}} <br />
          &nbsp;&nbsp;leftImage="your-image-url" <br />
          &nbsp;&nbsp;rightImage="your-image-url" <br />
          /&gt;
        </code>

        <br />

        <p id="repo-buttons" style={{ marginTop: '2rem' }}>
          <a href="https://github.com/christabor/metal-gear-codec/" target="_blank" rel="noopener noreferrer">
            View Original on GitHub
          </a>
        </p>

        <br />

        <p>
          Original vector file is licensed under{' '}
          <a href="https://creativecommons.org/licenses/by/3.0/us/" target="_blank" rel="noopener noreferrer">
            CC BY 3.0 US
          </a>
          . JS is licensed under MIT License.
        </p>

        <br />

        <p>
          This React version maintains the original functionality and styling while using modern React components.
        </p>
      </div>

      <br />
      <br />

      <p className="copyrights">
        <a href="http://www.sub.wz.cz/sounds.html" target="_blank" rel="noopener noreferrer">
          Codec mp3 by sub.wz.cz. Original sounds are copyright © Konami Corporation.
        </a>
      </p>
    </main>
  );
}
