
module.exports = function(grunt) {

  // All upfront config goes in a massive nested object.
  grunt.initConfig({
    distFolder: 'dist',
    // You can also set the value of a key as parsed JSON.
    // Allows us to reference properties we declared in package.json.
    pkg: grunt.file.readJSON('package.json'),
    // Grunt tasks are associated with specific properties.
    // these names generally match their npm package name.
    concat: {
      options: {
        // Specifies string to be inserted between concatenated files.
        separator: ';'
      },
      dist: {
        src: ['app/js/*.js'],
        dest: '<%= distFolder %>/main.js'
      }
    },

    uglify: {
      js: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    }    
  }); // The end of grunt.initConfig

  // load the tasks.
  // This will do a lookup similar to node's require() function.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register default task
  grunt.registerTask('default', ['concat', 'uglify']);
};