import { cpSync } from 'node:fs';
import { defineConfig } from 'vite';

const projectRoot = new URL('.', import.meta.url);

export default defineConfig({
  base: './',
  plugins: [
    {
      name: 'copy-static-portfolio-files',
      closeBundle() {
        cpSync(new URL('assets', projectRoot), new URL('dist/assets', projectRoot), { recursive: true });
        cpSync(new URL('project.html', projectRoot), new URL('dist/project.html', projectRoot));
        cpSync(new URL('resume.html', projectRoot), new URL('dist/resume.html', projectRoot));
      },
    },
  ],
});
