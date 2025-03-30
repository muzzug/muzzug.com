import fs from 'fs';
import path from 'path';

const blogDirectories = ['src/cs/blog', 'src/en/blog'];
    
function extractFrontmatter(content) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
    const match = content.match(frontmatterRegex);
    if (match) {
        const frontmatterContent = match[1];
        return frontmatterContent.split('\n').reduce((acc, line) => {
            const [key, ...value] = line.split(':');
            acc[key.trim()] = value.join(':').trim();
            return acc;
        }, {});
    }
    return {};
}

// Definice barevných kódů
const colors = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
};

// Funkce pro barevný výstup
function logWithColor(color, message) {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

// Použití ve vaší funkci
export async function checkLastEditedPost() {
    let lastEditedPost = null;

    for (const dir of blogDirectories) {
        const files = fs.readdirSync(dir)
            .filter(file => file.endsWith('.md'))
            .map(file => path.join(dir, file));

        for (const file of files) {
            const stats = fs.statSync(file);
            if (!lastEditedPost || stats.mtime > lastEditedPost.mtime) {
                lastEditedPost = { file, mtime: stats.mtime };
            }
        }
    }

    if (lastEditedPost) {
        const content = fs.readFileSync(lastEditedPost.file, 'utf-8');
        const frontmatter = extractFrontmatter(content);

        if (frontmatter.social && frontmatter.social.length > 400) {
            logWithColor('red', `Příspěvek ${lastEditedPost.file} má pole 'social' delší než 400 znaků. ❌`);
        } else {
            logWithColor('green', `Příspěvek ${lastEditedPost.file} má pole 'social' v pořádku. ✅`);
        }
    } else {
        logWithColor('yellow', 'Žádné příspěvky nebyly nalezeny.');
    }
}