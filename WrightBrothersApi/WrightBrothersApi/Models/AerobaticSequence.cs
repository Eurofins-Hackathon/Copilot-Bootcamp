using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

public class AerobaticSequence : List<AerobaticSequence.Maneuver>
{
    public class Maneuver
    {
        public string Type { get; set; }
        public int RepeatCount { get; set; }
        public char Difficulty { get; set; }
    }

    public static AerobaticSequence Parse(string signature)
    {
        var sequence = new AerobaticSequence();
        var matches = Regex.Matches(signature, @"([LHRTS])(\d+)([A-F])");

        foreach (Match match in matches)
        {
            sequence.Add(new Maneuver
            {
                Type = match.Groups[1].Value,
                RepeatCount = int.Parse(match.Groups[2].Value),
                Difficulty = match.Groups[3].Value[0]
            });
        }

        return sequence;
    }

    public double CalculateDifficulty()
    {
        double score = 0;
        string previousType = null;

        foreach (var maneuver in this)
        {
            double difficultyMultiplier = (maneuver.Difficulty - 'A') / 5.0 + 1.0;
            double repeatMultiplier = maneuver.RepeatCount;

            if (maneuver.Type == "H" && previousType == "H")
            {
                repeatMultiplier *= 1.5;
            }

            if (maneuver.Type == "R" && previousType == "L")
            {
                repeatMultiplier *= 2.0;
            }

            if (maneuver.Type == "S" && previousType == "T")
            {
                repeatMultiplier *= 3.0;
            }

            score += difficultyMultiplier * repeatMultiplier;
            previousType = maneuver.Type;
        }

        return score;
    }
}