using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BradfordPaul.Models
{
    public class GradeModel
    {
        [Range(0, 55)]
        [Required]
        public ushort Assignments { get; set; }

        [Range(0, 5)]
        [Required]
        public ushort Group_Projects { get; set; }

        [Range(0, 10)]
        [Required]
        public ushort Quizzes { get; set; }

        [Range(0, 20)]
        [Required]
        public ushort Exams { get; set; }

        [Range(0, 10)]
        [Required]
        public ushort Intex { get; set; }
    }
}
