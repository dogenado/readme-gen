// ASCII art cache
let asciiArtCache = {};
let currentAsciiArt = '';

// Load available ASCII art files from ascii directory
async function loadAsciiArtFiles() {
    const select = document.getElementById('asciiArt');
    select.innerHTML = '<option value="">Loading...</option>';
    
    // Start with embedded art as fallback
    loadEmbeddedArt();
    
    // Try to load and override with external ASCII art files
    try {
        const indexResponse = await fetch('ascii/art-index.json');
        
        if (indexResponse.ok) {
            const asciiFiles = await indexResponse.json();
            
            for (const file of asciiFiles) {
                try {
                    const response = await fetch(`ascii/${file}`);
                    if (response.ok) {
                        const art = await response.text();
                        const fileName = file.replace('.txt', '').replace(/-/g, ' ').replace(/_/g, ' ');
                        
                        // Store in cache - this will override any existing embedded entry
                        asciiArtCache[fileName] = art;
                        console.log(`Loaded external ASCII art: ${fileName}`);
                    }
                } catch (error) {
                    console.warn(`Failed to load ${file}:`, error);
                }
            }
        } else {
            console.warn('Could not load art-index.json, using embedded art only');
        }
    } catch (error) {
        console.warn('Could not load ASCII art index, using embedded art only:', error);
    }
    
    // Always populate dropdown (whether external files loaded or not)
    populateDropdown();
}

function loadEmbeddedArt() {
    // Fallback embedded art
    asciiArtCache = {
        'Ascii dogenado': `                  @                    @%            
                 @@@@                 @@@            
                :@@@@@@@            :@@@@            
                %@@@@@@@@@:+@@+         @@           
                *@@@@@@@@@@@@@   @@@@@       @.      
                 @@@@@@@@@@@@@@@@@@@@@        @@     
                 @@@@@@@.   @@@@   @@@@        @@    
         @@@@@@@@@@@@@    @@@@      =@@.  @@@   @=   
       @@@@@@@@@@@@@      #*@.:@@@        :@@    @%  
      :@@@@@@@@@@@@@         -@@@@ @              @  
      @@@@@@@@@@@@:            . .                @@ 
     @@@@@@@@@@@@@                       .@@@@@@  #@ 
    @@@@@@@@@@@@@@                       @@@@@@@:  @ 
   .@@@@@@@@@@@@@@@                       @@@@@@   @#
   #@@@@@@@@@@@@@@@@                      @@@@@.   @=
   @@@@@@@@@  .@@@@@@.             @@@@%@@@@@@@@  @@ 
  @@@@@@@@@@@   @@@@@@@               @@@@@@@@   .@= 
@@@@@@@@@@@@@@    @@@@@@@                        @:  
@@@@@@@@@@@@@@@     @@@@@@@    @@             %@@    
@@@@@@@@ :@@@@@@@     @@@@@@@.    @@@@.   .@@@@@@    
-@@@@@@@   @@@@@@@@      @@@@@@@    .@@@@@@@@@@@@@   
 @@@@@@@@    @@@@@@@@.      @@@@@@%     ..@@@@@@@@   
  @@@@@@@@      @@@@@@@@@.     @@@@@@@               
 @@@@@@@@@@@       @@@@@@@@@@.     @@@@@@@.          
@@@@@@@@@@@@@@              @@@@@@     .@@@@@@@      
@@@@@@  @@@@@@@                               @@@@@@%
 @@@@@.   @@@@@:    @@@@@@@.                         
  .@@@@#      @@@@     %@@@@@@                       
    @@@@@@         @@@                               
     @@@@@@@@@+                                      
     @@@@.@@@@@                                      
      @@@@.  -@@@@@.                                 
        @@@@@                                        
          @@@@@@@.                                   
            .@@@@@@@@@                               
                :@@@@-                               
                   @@@@                              
                 @@@@                                
                  @@@@                               
                   @@@                               
                 @@@                                 `,
        'Printer': `                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                          -##############################################-                          
                          +.                                            .=                          
                            +.  :-     .         #=.             .-: ..+                            
                            *.  :-               --#.             -:  .*                            
                            *.  :-               .+.+             -:  .+                            
                            *.  :-          .*@@@@%@@@@:          -:  .+                            
                            *.  :-          =++.-+#=.#.#          -:  .+                            
                            *.  :#**********#+.-.=*-.::%*********+*:  .+                            
                            *.  :*==========*+.::+=:-=:%==========*:  .+                            
                            *.  :-          =+.:+:.-=..#          -:  .+                            
                            *.  :-          =%++++++++**          =:  .+                            
                            *.  :-             =...:+  .          =:  .+                            
                            *.  :-            ..*..=:.            =:  .+                            
                            *.  :-             ..%@..             =:  .+                            
                            *.  :-                                =:  .+                            
                            *.  :-                                =:  .+                            
                            *.  :-                                =:  .+                            
                            *.  :-                                =:  .+                            
                            *.  :-                                =:  .+                            
                            *.  :-                                =:  .+                            
                            *.  :-*%%%@@@@@@@@@@@@@@@@@@@@@%%%%%#==:  .+                            
                            *.  --#.                       .    .+=:  .+                            
                            *.  ---===*+%==================*+@=--.=:  .+                            
                            *:::==::::=-%::::::::::::::::::+-@::::=-:::+                            
                          .*.      .*.                  ..    .*       .#.                          
                          @.       .*  =:.           -. %..%: .#        .%                          
                         =-        .#. =-............=..#+-@. .#         =-.                        
                        .@         .*                         .#          @.                        
                        -#####################################*#***********-                        
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                 `,
        'Revolver': `      .____.
   xuuu\`\`\$$$uuu.
 . \$\`\`\$  $$$\`$$$
dP*$  $  $$$ $$$
?k $  $  $$$ $$$
 $ $  $  $$$ $$$
 ":$  $  $$$ $$$
  N$  $  $$$ $$$
  $$  $  $$$ $$$
   $  $  $$$ $$$
   $  $  $$$ $$$
   $  $  $$$ $$$
   $  $  $$$ $$$
   $  $  $$$ $$$
   $$#$  $$$ $$$
   $$'$  $$$ $$$
   $$\`R  $$$ $$$
   $$$&  $$$ $$$
   $#*$  $$$ $$$
   $  $  $$$ @$$
   $  $  $$$ $$$
   $  $  $$$ $$$
   $  $  $B$ $$&.
   $  $  $D$ $$$$$muL.
   $  $  $Q$ $$$$$  \`"**mu..
   $  $  $R$ $$$$$    k  \`$$*t
   $  @  $$$ $$$$$    k   $$!4
   $ x$uu@B8u$NB@$uuuu6...$$X?
   $ $(\`RF\`$`````\`R$ $$5\`"""#"R
   $ $" M$ $     $$ $$$      ?
   $ $  ?$ $     T$ $$$      $
   $ $F H$ $     M$ $$K      $  ..
   $ $L $$ $     $$ $$R.     "d$$$$Ns.
   $ $~ $$ $     N$ $$X      ."    "%2h
   $ 4k f  $     *$ $$&      R       "iN
   $ $$ %uz!     tuuR$$:     Buu      ?\`:
   $ $F          $??$8B      | '*Ned*$~L$
   $ $k          $'@$$$      |$.suu+!' !$
   $ ?N          $'$$@$      $*\`      d:"
   $ dL..........M.$&$$      5       d"P
 ..$.^"*I$RR*$C""??77*?      "nu...n*L*
'$C"R   \`\`\`""!$*@#""\` .uor    bu8BUU+!\`
'*@m@.       *d"     *$Rouxxd"\`\`\`$
     R*@mu.           "#$R *$    !
     *%x. "*L               $     %.
        "N  \`%.      ...u.d!\` ..ue$$$o..
         @    ".    $*"""" .u$$$$$$$$$$$$beu...
        8  .mL %  :R\`     x$$$$$$$$$$$$$$$$$$$$$$$$$$WmeemeeWc
       |$e!" "s:k 4      d$N"\`"#$$$$$$$$$$$$$$$$$$$$$$$$$$$$$>
       $$      "N @      $?$    F$$$$$$$$$$$$$$$$$$$$$$$$$$$$>
       $@       ^%Uu..   R#8buu$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$>
                  \`\`\`""*u$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$>
                         #$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$>
                          "5$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$>
                            \`*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$>
                              ^#$$$$$$$$$$$$$$$$$$$$$$$$$$$$$>
                                 "*$$$$$$$$$$$$$$$$$$$$$$$$$$>
                                   \`"*$$$$$$$$$$$$$$$$$$$$$$$>
                                       ^!$$$$$$$$$$$$$$$$$$$$>
                                           \`"#+$$$$$$$$$$$$$$>
                                                 """**$$$$$$$$>
                                                        \`\`\``
    };
}

function populateDropdown() {
    const select = document.getElementById('asciiArt');
    select.innerHTML = '';
    
    // Sort keys alphabetically for consistent ordering
    const sortedNames = Object.keys(asciiArtCache).sort();
    
    for (const name of sortedNames) {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name.charAt(0).toUpperCase() + name.slice(1);
        select.appendChild(option);
    }
    
    if (sortedNames.length > 0) {
        const firstOption = sortedNames[0];
        currentAsciiArt = asciiArtCache[firstOption];
        
        select.addEventListener('change', function() {
            currentAsciiArt = asciiArtCache[this.value];
            generateReadme();
        });
        
        generateReadme();
    } else {
        select.innerHTML = '<option value="">No ASCII art available</option>';
    }
}

// DOM elements
document.addEventListener('DOMContentLoaded', function() {
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const versionInput = document.getElementById('version');
    const additionalThanksInput = document.getElementById('additionalThanks');
    const generateBtn = document.getElementById('generateReadme');
    const copyBtn = document.getElementById('copyToClipboard');
    const readmeOutput = document.getElementById('readmeOutput');
    const addReleaseNoteBtn = document.getElementById('addReleaseNote');
    const addDeveloperBtn = document.getElementById('addDeveloper');

    // Load ASCII art files
    loadAsciiArtFiles();

    // Add release note line
    addReleaseNoteBtn.addEventListener('click', function() {
        const releaseNotesDiv = document.getElementById('releaseNotes');
        const noteItem = document.createElement('div');
        noteItem.className = 'release-note-item';
        noteItem.innerHTML = `
            <input type="text" placeholder="Release note" class="release-note-input">
            <button type="button" class="remove-btn">Remove</button>
        `;
        releaseNotesDiv.appendChild(noteItem);
        attachRemoveNoteListener(noteItem.querySelector('.remove-btn'));
        generateReadme();
    });

    // Add developer
    addDeveloperBtn.addEventListener('click', function() {
        const developersDiv = document.getElementById('developers');
        const developerItem = document.createElement('div');
        developerItem.className = 'developer-item';
        developerItem.innerHTML = `
            <input type="text" placeholder="Developer name" class="developer-name">
            <button type="button" class="remove-btn">Remove</button>
        `;
        developersDiv.appendChild(developerItem);
        attachRemoveDeveloperListener(developerItem.querySelector('.remove-btn'));
        generateReadme();
    });

    // Attach remove listeners to existing elements
    document.querySelectorAll('.remove-btn').forEach(button => {
        const item = button.closest('.release-note-item, .developer-item');
        if (item.classList.contains('release-note-item')) {
            attachRemoveNoteListener(button);
        } else {
            attachRemoveDeveloperListener(button);
        }
    });

    // Generate README
    generateBtn.addEventListener('click', generateReadme);

    // Copy to clipboard
    copyBtn.addEventListener('click', function() {
        const text = readmeOutput.textContent;
        navigator.clipboard.writeText(text).then(() => {
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = 'Copy';
            }, 2000);
        });
    });

    // Auto-generate on input change
    [titleInput, descriptionInput, versionInput, additionalThanksInput].forEach(input => {
        input.addEventListener('input', generateReadme);
    });
});

function attachRemoveNoteListener(button) {
    button.addEventListener('click', function() {
        const releaseNotesDiv = document.getElementById('releaseNotes');
        if (releaseNotesDiv.children.length > 1) {
            this.parentElement.remove();
            generateReadme();
        }
    });
}

function attachRemoveDeveloperListener(button) {
    button.addEventListener('click', function() {
        const developersDiv = document.getElementById('developers');
        if (developersDiv.children.length > 1) {
            this.parentElement.remove();
            generateReadme();
        }
    });
}

function createBorderBox(content) {
    const lines = content.split('\n');
    const maxLength = Math.max(...lines.map(line => line.length));
    const border = '+' + '-'.repeat(maxLength + 2) + '+';
    const bottomBorder = '+' + '-'.repeat(maxLength + 2) + '+';
    
    const boxedLines = lines.map(line => {
        return '| ' + line.padEnd(maxLength) + ' |';
    });
    
    return [border, ...boxedLines, bottomBorder].join('\n');
}

function generateReadme() {
    if (!currentAsciiArt) return;
    
    const title = document.getElementById('title').value || 'Project Title';
    const description = document.getElementById('description').value || 'Project description goes here.';
    const version = document.getElementById('version').value || '1.0.0';
    const additionalThanks = document.getElementById('additionalThanks').value;

    // Get release notes
    const releaseNotes = [];
    document.querySelectorAll('.release-note-input').forEach(input => {
        if (input.value.trim()) {
            releaseNotes.push(`• ${input.value.trim()}`);
        }
    });

    // Get developers
    const developers = [];
    document.querySelectorAll('.developer-name').forEach(input => {
        if (input.value.trim()) {
            developers.push(input.value.trim());
        }
    });

    // Build README content
    let readme = currentAsciiArt + '\n\n';

    // Main section with border
    const mainContent = `Title: ${title}
Description: ${description}
Version: ${version}`;
    
    readme += createBorderBox(mainContent) + '\n\n';

    // Release notes section
    if (releaseNotes.length > 0) {
        readme += '## Release Notes\n\n';
        readme += releaseNotes.join('\n') + '\n\n';
    }

    // Credits section
    if (developers.length > 0) {
        readme += '## Credits\n\n';
        readme += developers.join('\n') + '\n\n';
    }

    // Additional thanks section
    if (additionalThanks.trim()) {
        readme += '## Additional Thanks\n\n';
        readme += additionalThanks.trim() + '\n';
    }

    // Display generated README
    document.getElementById('readmeOutput').textContent = readme;
}