import React from 'react'
import styled from 'styled-components'
import Section from './section'
import FancyLink from './fancyLink'
import { TiDocumentText } from 'react-icons/ti'

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 34px;
    border-bottom: 2px solid #3b3f44;
    padding-bottom: 10px;
    margin-bottom: 25px;
`
const Title = styled.h3`
    font-size: 24px;
    margin-top: 40px;
    margin-bottom: 10px;
    text-align: left;
`
const Paragraph = styled.p`
    font-size: 18px;
    margin-bottom: 25px;
    text-align: left;
`
const CodeOfConduct = styled.div`
    margin: 0 auto 25px auto;
    padding: 0 10%;
`
const CodeOfConductParagraph = styled.p`
    font-size: 18px;
    margin-bottom: 25px;
    text-align: justify;
`
const Ranks = styled.ul`
    margin: 15px;

    & > li {
        margin-left: 15px;
        margin-bottom: 15px;
    }
    & > ul {
        margin: 15px;
    }
    & > ul {
        margin-bottom: 25px;
    }
    & > ul > li {
        margin-left: 15px;
        margin-bottom: 15px;
    }
`

const Charter = () => (
    <Section>
        <Header>
            <h2>Guild Charter</h2>
            <TiDocumentText /> 
        </Header>

        <Title>Code of Conduct</Title>
        <hr />
        <Paragraph>1. All Officers, Members and Recruits must follow this code of conduct or risk their membership with the guild being revoked.</Paragraph>
        <Paragraph>2. Friends and associated guilds in our Discord server must also abide by this code of conduct or they will be banned from the server.</Paragraph>
        <Paragraph>3. All Officers are responsible for enforcing this code of conduct both in-game and in Discord.</Paragraph>
        <CodeOfConduct>
            <CodeOfConductParagraph>Do not violate Blizzard’s Terms of Use or do anything to potentially get yourself banned. We need you! Getting banned can severely hinder the guild’s raid progression due to your absence plus we will miss you in-game.</CodeOfConductParagraph>
            <CodeOfConductParagraph>We want to build and uphold a good name in the community. Refrain from any action or behavior that may damage the guild’s reputation. Everything you do can improve or damage our reputation and reputations can last longer than the lifespan of your character.</CodeOfConductParagraph>
            <CodeOfConductParagraph>Do not initiate or engage in hateful speech in any public or private channels used for the guild and the servers on which we play. While banter and rude jokes are part of what we enjoy, keep it tasteful. Misogyny, racism, homophobia, xenophobia and other forms of hate speech are not tasteful.</CodeOfConductParagraph>
            <CodeOfConductParagraph>Do not be personally mean or cruel to another player of either faction, including excessive griefing or engaging in harassing behavior in public and private channels used for the guild and the servers on which we play. Ganking can be fun and trolling other players is just a part of the game, but don't take it so far as to damage the guild’s reputation with your actions.</CodeOfConductParagraph>
        </CodeOfConduct>

        <Title>Culture</Title>
        <hr />
        <Paragraph>4. We are a friendly and relatively casual guild focused on relationships, good times, shared experiences, shared food creations, and fun banter in and out of game.</Paragraph>
        <Paragraph>5. Meme players, elitists, snobs, and unfriendly people are not welcome in our guild and will be found out and removed expeditiously.</Paragraph>
        <Paragraph>6. Raiding is a part of our guild and we participate in it as much as we possibly can. We are a casual guild but that does not mean we slack off during raids. Raiding should be taken seriously and all participants are expected to pull their own weight for the benefit and enjoyment of themselves and others.</Paragraph>

        <Title>Goals</Title>
        <hr />
        <Paragraph>7. Maintain a happy and friendly atmosphere that all members can enjoy and participate in.</Paragraph>
        <Paragraph>8. Progress through all PvE content provided throughout the Burning Crusade expansion.</Paragraph>
        <Paragraph>9. Provide opportunities for roleplay and guild/server events related to roleplay.</Paragraph>

        <Title>Current Content Requires (CCR)</Title>
        <hr />
        <Paragraph>10. The CCR is a document that outlines the requirements and expectations for Raiders, Veterans, Officers and the Guild Master to obtain and maintain their ranks. <u>The CCR does not apply to Recruit, Alt, and Member ranks.</u></Paragraph>
        <Paragraph>11. Upon progression to additional content available throughout the Burning Crusade expansion, the CCR will be updated to reflect any new requirements.</Paragraph>
        <Paragraph>12. Link to the CCR: <FancyLink to='https://docs.google.com/document/d/1snd2R8Zb_RutkWvc1SFm9EbuPn4teoZFjlqRLjJVNLk/edit?usp=sharing'>https://docs.google.com/document/d/1snd2R8Zb_RutkWvc1SFm9EbuPn4teoZFjlqRLjJVNLk/edit?usp=sharing</FancyLink></Paragraph>
    
        <Title>Leadership</Title>
        <hr />
        <Paragraph>13. The guild will be operated as a democracy with leadership executing the will and desire of the majority of the guild’s members. It is leadership’s responsibility to keep the guild afloat and working towards accomplishing its goals while not taking any actions that are explicitly against the will of the guild.</Paragraph>
        <Paragraph>14. Guild officers will be broken down into the following positions:</Paragraph>
        <Ranks>
            <li>14.1 Guild Master</li>
            <ul>
                <li>14.1.1 Responsible for overseeing the guild’s officer core and ensuring they are following through with their duties.</li>
                <li>14.1.2 Responsible for organizing and running officer meetings and providing feedback on officer-related activity.</li>
                <li>14.1.3 Is the speaker for the guild regarding relationships and communications with other guild leaders and high level guild matters.</li>
                <li>14.1.4 Every three months the Guild Master must deliver a state of the guild announcement, summarizing the guild’s successes, failures, goals, changes, challenges and any other relevant information.</li>
            </ul>
            <li>14.2 Guild Administrator</li>
            <ul>
                <li>14.2.1 Responsible for maintaining guild documentation and administering the Discord server and other guild assets.</li>
                <li>14.2.2 Responsible for overseeing and implementing updates to the CCR.</li>
                <li>14.2.3 Responsible for organizing and scheduling guild events and raids and assigning leadership roles as needed to each.</li>
                <li>14.2.4 Responsible for drafting, posting and overseeing votes.</li>
            </ul>
            <li>14.3 Guild Banker</li>
            <ul>
                <li>14.3.1 Responsible for overseeing and administering the guild bank.</li>
                <li>14.3.2 Will pursue opportunities to make substantial profits for the guild utilizing the guild bank and assets acquired through guild activities and raiding.</li>
            </ul>
            <li>14.4 Public Relations Officer</li>
            <ul>
                <li>14.4.1 Responsible for recruitment and checking in with raid leaders/other officers to see what roles need to be recruited.</li>
                <li>14.4.2 Responsible for establishing and maintaining relationships with other guilds and players on the server.</li>
                <li>14.4.3 Will be a point of contact for inquiries, requests, and complaints and help direct them to the right people.</li>
                <li>14.4.4 Responsible for on-boarding new recruits, getting them setup in discord and introduced to their role leader.</li>
            </ul>
            <li>14.5 Tanks Officer</li>
            <ul>
                <li>14.5.1 Responsible for overseeing, training, teaching, and advocating for the guild’s tanks.</li>
                <li>14.5.2 Responsible for assigning tank targets during raids or delegating this responsibility if they are not present or available.</li>
            </ul>
            <li>14.6 Healers Officer</li>
            <ul>
                <li>14.6.1 Responsible for overseeing, training, teaching, and advocating for the guild’s healers.</li>
                <li>14.6.2 Responsible for healing assignments during raids or delegating this responsibility if they are not present or available.</li>
            </ul>
            <li>14.7 Casters Officer</li>
            <ul>
                <li>14.7.1 Responsible for overseeing, training, teaching, and advocating for the guild’s Caster DPS players.</li>
                <li>14.7.2 Responsible for reviewing raid logs weekly and going over performance issues and concerns with respective DPS players.</li>
            </ul>
            <li>14.8 Fighters Officer</li>
            <ul>
                <li>14.8.1 Responsible for overseeing, training, teaching, and advocating for the guild’s Physical DPS players.</li>
                <li>14.8.2 Responsible for reviewing raid logs weekly and going over performance issues and concerns with respective DPS players.</li>
            </ul>
        </Ranks>
    
        <Title>Membership</Title>
        <hr />
        <Paragraph>15. Membership at any rank is contingent upon maintaining the guild’s code of conduct.</Paragraph>
        <Paragraph>16. Officers have the ability to remove players from the guild at their discretion.</Paragraph>
        <Paragraph>17. Ranks in the guild are broken down as follows:</Paragraph>
        <Ranks>
            <li>17.1 Recruit</li>
            <ul>
                <li>17.1.1 New potential Members who have been in the guild fewer than 3 weeks.</li>
                <li>17.1.2 Recruits may only be invited to the guild by an Officer or a Veteran.</li>
            </ul>
            <li>17.2 Alt</li>
            <ul>
                <li>17.2.1 Alternate characters of Members, Raiders, Veterans and Officers.</li>
                <li>17.2.2 Recruits may not have alternate characters in the guild until they have finished their trial period and been promoted.</li>
            </ul>
            <li>17.3 Member</li>
            <ul>
                <li>17.3.1 Members who have been in the guild for more than 3 weeks and been promoted by an Officer.</li>
                <li>17.3.2 May purchase items for personal use (not for resale) from the guild bank at 50% current market value.</li>
            </ul>
            <li>17.4 Raider</li>
            <ul>
                <li>17.4.1 Members who are in compliance with the CCR for the current patch and interested in seriously pursuing raiding.</li>
                <li>17.4.2 To be promoted to Raider a Member rank must be in compliance with the CCR and submit a request to the Officers for review and promotion.</li>
                <li>17.4.3 Members of this rank will be demoted to Member if they fall out of compliance with the CCR without an approved exception by the Officers.</li>
                <li>17.4.4 May purchase items for personal use (not for resale) from the guild bank at 40% current market value.</li>
                <li>17.4.5 Priority raid slot.</li>
            </ul>
            <li>17.5 Veteran</li>
            <ul>
                <li>17.5.1 Raiders who have gone above and beyond to distinguish themselves with their commitment to the guild, the raid team, and their role in PvE.</li>
                <li>17.5.2 Promotion to Veteran is at the sole discretion of leadership.</li>
                <li>17.5.3 Members of this rank will be demoted to Member if they fall out of compliance with the CCR without an approved exception by the Officers.</li>
                <li>17.5.4 May purchase items for personal use (not for resale) from the guild bank at 30% current market value.</li>
                <li>17.5.5 Priority raid slot.</li>
            </ul>
            <li>17.6 Officer</li>
            <ul>
                <li>17.6.1 Members of leadership.</li>
                <li>17.6.2 Must be in compliance with the CCR to maintain their position. Officers who fail to maintain compliance with the CCR will automatically be demoted to Member and must re-earn their Officer rank over again.</li>
                <li>17.6.3 Officers can be demoted either by a 2/3rds majority vote from the guild or by unanimous decision by all other Officers.</li>
                <li>17.6.4 New officers must be nominated by a Veteran or Officer of the guild and confirmed by a 2/3rds majority vote.</li>
                <li>17.6.5 New officer positions must have a specific role and responsibilities to fulfill which should be amended to this charter when needed.</li>
                <li>17.6.6 May purchase items for personal use (not for resale) from the guild bank at 40% current market value.</li>
                <li>17.6.7 Priority raid slot.</li>
            </ul>
            <li>17.7 Guild Master</li>
            <ul>
                <li>17.7.1 Same as Officer but specifically for the Guild Master title.</li>
                <li>17.7.2 The Guild Master must be in compliance with the CCR to maintain their position. If the Guild Master falls out of compliance with the CCR they must relinquish their position to the Guild Administrator until a new Guild Master is elected.</li>
                <li>17.7.3 The Guild Master can be overthrown either by a 2/3rds majority vote from the guild or by unanimous decision by all other Officers.</li>
                <li>17.7.4 A new guild master must be nominated by a Veteran or Officer of the guild and confirmed by a 2/3rds majority vote.</li>
                <li>17.7.5 May purchase items for personal use (not for resale) from the guild bank at 40% current market value.</li>
                <li>17.7.6 Priority raid slot.</li>
            </ul>
        </Ranks>
        
        <Title>Raiding</Title>
        <hr />
        <Paragraph>18. See the <FancyLink to='/schedule'>Schedule</FancyLink> page for the current raid schedule.</Paragraph>
        <Paragraph>19. Every raid will have an assigned Raid Leader responsible for filling the roster, conducting the roll call, benching players if needed, and leading the raid.</Paragraph>
        <Paragraph>20. Every raid will have an assigned Master Looter responsible for distributing loot according to the guild’s guidelines and ensuring all raid materials are delivered to the guild bank.</Paragraph>
        
        <Title>Loot System</Title>
        <hr />
        <Paragraph>21. When an item drops in a Primary raid, all participants who are eligible for the item and of rank Member and higher will type into officer chat who they want the item to go to. This includes players who are not currently in the raid but are online at the time as well as players who would be eligible for the item but already have it.</Paragraph>
        <Paragraph>22. Only officers can read officer chat so they will announce the winner. This also keeps the voting relatively anonymous.</Paragraph>
        <Paragraph>23. If there is a tie then officers will announce who should roll for the item to break the tie.</Paragraph>
        <Paragraph>24. If a participant isn’t sure who to vote for they can either abstain from typing a name or just type “roll” indicating they want all eligible players to roll for the item.</Paragraph>
        
        <Title>Rules</Title>
        <hr />
        <Ranks>
            <li>25. Main Characters vs Alt Characters</li>
            <ul>
                <li>25.1 Every player of rank Raider and above must maintain a single character as their “main.” This character will be expected to be the one attending all primary raid events.</li>
                <li>25.2 The Raid Leader of an event may request a player to use an alternate character if the roster calls for it.</li>
                <li>25.3 Member ranks are permitted to bring any characters they choose to a raid but may be asked to switch based on the roster by the Raid Leader.</li>
                <li>25.4 When requesting to be promoted to Raider, a Member must choose only one character who meets the requirements and thereby designate that character as their main.</li>
                <li>25.5 Raiders being promoted to an Officer position must maintain their same main character.</li>
                <li>25.6 Members being promoted to an Officer position must include which character they are claiming as their main when being voted on for the promotion.</li>
                <li>25.7 Main characters may not switch to different specs/roles during primary raids (i.e. you cannot be promoted to Raider as a Holy Paladin and then switch to a Ret Paladin).</li>
                <li>25.8 Exceptions for Raiders can be made with the approval of Leadership.</li>
                <li>25.9 An Officer or Guild Master may only change their spec/role if approved unanimously by all other Officers and the Guild Master.</li>
                <li>25.10 A Raider may only designate another character as their main with the approval of leadership.</li>
                <li>25.11 An Officer or Guild Master wishing to designate another main character may only do so  if approved unanimously by all other Officers and the Guild Master.</li>
            </ul>
            <li>26. Raid Slot Priority</li>
            <ul>
                <li>26.1 All players with a rank of Raider and above are considered first for raid slots in both 25 and 10 player raid events.</li>
                <li>26.2 The Raid Leader is responsible for filling the raid by whatever means necessary. The following criteria are recommendations only:</li>
                <li>26.3 Critical roles necessary for the raid composition should be filled before anything else.</li>
                <li>26.4 Those with at least adequate gear should be considered before those who are still gearing up in previous content/dungeons.</li>
                <li>26.5 Those who have been benched more so than others should have higher priority.</li>
            </ul>
        </Ranks>
    
    </Section>
)

export default Charter
