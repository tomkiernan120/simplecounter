module.exports = function(grunt) {

    grunt.registerMultiTask( 'editScriptTag', 'Update Script Tag for Plugin in example index.html', function() {
        var data = this.data,
            path = require('path'),
            src = grunt.file.read( data.src ),
            dest = grunt.template.process( data.dest ),
            tag = data.tag,
            out;

        out = src.replace( /simplecounter[.\dminjs]+/g, tag );
        grunt.file.write( dest, out );
        grunt.log.writeln( 'Script Tag Updated' );
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'src/*.js'],
            options: {
                globals: {
                    jQuery: true
                },
                force: true
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.<%= pkg.version %>.min.js'
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'uglify']
        },
        editScriptTag: {
            main: {
                tag: '<%= pkg.name %>.<%= pkg.version %>.min.js',
                src: 'index.html',
                dest: 'index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'uglify', 'editScriptTag'] );

};